import { Injectable, EventEmitter } from '@angular/core';
import { Feedback } from './feedback/feedback';

@Injectable({
  providedIn: 'root'
})
export class VerifierService {

  private static NOT_MOZOON = 'البيت الذي أدخلته غير موزون';

  hidden_aleph = new Map();
  الحروف_الشمسية = ['ت', 'ث', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ل', 'ن'];
  الحروف_القمرية = ['أ', 'إ', 'ب', 'ج', 'ح', 'خ', 'ع', 'غ', 'ف', 'ق', 'ك', 'م', 'ه', 'و', 'ي'];
  shaddah = 'ّ';
  sokoon: string = 'ْ';
  تنوين_فتح = 'ً';
  تنوين_كسر = 'ٍ';
  تنوين_ضم = 'ٌ';
  نون_ساكنة = 'نْ';
  فتحة = 'َ';
  ضمة = 'ُ';
  كسرة = 'ِ';
  مد = 'آ';
  tanween = ['ً', 'ٍ', 'ٌ'];
  فعولن = '11010';
  فاعلن = '10110';
  مفاعيلن = '1101010';
  مفاعلتن = '1101110';
  mofaelton = '1101010';
  متفاعلن = '1110110';
  motfaelon = '1010110';
  مفاعلن = '110110';
  متفاعلاتن = '111011010';
  متفاعلان = '11101100';
  فعلاتن = '111010';
  مستفعلن = '1010110';
  مستفعل = '101011';
  متفعل = '11011';
  متفعلن = '110110';
  مفتعلن = '101110';
  متعلن = '11110';
  فاعلاتن = '1011010';
  فاعلان = '101100';
  مفعولات = '1010101';
  فاعلات = '101101';
  فعولات = '110101';
  فعلات = '11101';
  faolo = '1101';
  faool = '1100';
  falon = '1010';
  faelon = '1110';
  fal = '101';
  faal = '110';
  مفاعيل = '110101';
  مستفعلان = '10101100';
  مفعولن = '101010';
  مفعولان = '1010100';
  فعولان = '110100';
  فاعلاتان = '10110100';
  مفعول = '10101';

  receivedFilter: EventEmitter<Feedback>;

  constructor() {
    this.receivedFilter = new EventEmitter<Feedback>();
    this.hidden_aleph.set("هذا", "هَاذَا");
    this.hidden_aleph.set("هذه", "هَاذِهِ");
    this.hidden_aleph.set("هذان", "هَاذَانِ");
    this.hidden_aleph.set("هؤلاء", "هَاؤُلَاءِ");
    this.hidden_aleph.set("ذلك", "ذَالِكَ");
    this.hidden_aleph.set("أولئك", "أُلَائِكَ");
    this.hidden_aleph.set("الله", "اللَاهُ");
    this.hidden_aleph.set("الرحمن", "اررَحمَانِ");
    this.hidden_aleph.set("إله", "إِلَاهِ");
    this.hidden_aleph.set("لكن", "لَاكِن");
    this.hidden_aleph.set("طه", "طَاهَ");
  }


  //assumptions:
  //  -poem is a one-liner
  //  -أسماء الإشارة غير مشكلة
  //  - ال التعريف غير مشكلة
  //  - حروف العطف تُفصل بمسافة عن بداية الكلمة
  //  - الشدة لايوضع معها تشكيل آخر
  //  - تنوين الفتح على الحرف قبل الألف
  //  - ألف المد لاتشكل
  //  - ضمير الغائب مشبع
  //TODO: support full poems
  verify(poem: string) {

    var retval: Feedback  = new Feedback();
    //كتابة عروضية

    //TODO remove extraneous spaces
    var أشطر = poem.split('***');
    var صدر = this.arood_writing(أشطر[0].trim());
    //if(!أشطر[1]) {return; }//TODO دعم البيت المشطور
    var عجز;
    if (أشطر[1]) {
      عجز = this.arood_writing(أشطر[1].trim());
    }

    var sadr_in_bits = this.convert_to_bits(صدر);
    retval.تقطيع = sadr_in_bits;

    var ajz_in_bits;
    if (عجز) {
      ajz_in_bits = this.convert_to_bits(عجز);
      retval.تقطيع += ' *** ' + ajz_in_bits;
    }

    retval.تقطيع.split("").reverse().join("");
    retval.موزون = true;
    //compare with بحور
    if (this.الطويل(sadr_in_bits, ajz_in_bits)) {//1
      console.log('البحر الطويل');
      retval.بحر = 'البحر الطويل';
    }

    if (this.المتقارب(sadr_in_bits, ajz_in_bits)) {//2
      console.log('البحر المتقارب');
      retval.بحر = 'البحر المتقارب';
    }

    if (this.البسيط(sadr_in_bits, ajz_in_bits)) {//3
      console.log('البحر البسيط');
      retval.بحر = 'البحر البسيط';
    }

    if (this.الرجز(sadr_in_bits, ajz_in_bits)) {//4
      console.log('بحر الرجز');
      retval.بحر = 'بحر الرجز';
    }

    if (this.السريع(sadr_in_bits, ajz_in_bits)) {//5
      console.log('البحر السريع');
      retval.بحر = 'البحر السريع';
    }

    if (this.المنسرح(sadr_in_bits, ajz_in_bits)) {//6
      console.log('البحر المنسرح');
      retval.بحر = 'البحر المنسرح';
    }

    if (this.الكامل(sadr_in_bits, ajz_in_bits)) {//7
      console.log('البحر الكامل');
      retval.بحر = 'البحر الكامل';
    }

    if (this.الوافر(sadr_in_bits, ajz_in_bits)) {//8
      console.log('البحر الوافر');
      retval.بحر = 'البحر الوافر';
    }

    if (this.المديد(sadr_in_bits, ajz_in_bits)) {//9
      console.log('البحر المديد');
      retval.بحر = 'البحر المديد';
    }

    if (this.الرمل(sadr_in_bits, ajz_in_bits)) {//10
      console.log('بحر الرمل');
      retval.بحر = 'بحر الرمل';
    }

    if (this.الخفيف(sadr_in_bits, ajz_in_bits)) {//11
      console.log('البحر الخفيف');
      retval.بحر = 'البحر الخفيف';
    }

    //قد يختلط الهزج بمجزوء الوافر
    if (this.الهزج(sadr_in_bits, ajz_in_bits)) {//12
      console.log('بحر الهزج');
      retval.بحر = 'بحر الهزج';
    }

    if (this.المضارع(sadr_in_bits, ajz_in_bits)) {//13
      console.log('البحر المضارع');
      retval.بحر = 'البحر المضارع';
    }

    if(this.المقتضب(sadr_in_bits, ajz_in_bits)) {//14
      console.log('البحر المقتضب');
      retval.بحر = 'البحر المقتضب';
    }

    if(this.المجتث(sadr_in_bits, ajz_in_bits)) {//15
      console.log('البحر المجتث');
      retval.بحر = 'البحر المجتث';
    }

    if(this.المتدارك(sadr_in_bits, ajz_in_bits)) {//16
      console.log('البحر المتدارك');
      retval.بحر = 'البحر المتدارك';
    }

    if(!retval.بحر) {
      retval.موزون = false;
      retval.بحر = VerifierService.NOT_MOZOON;
    }

    this.receivedFilter.emit(retval);

  }

  //TODO: حذف واو عمرو وألف الجماعة
  //TODO: أنا يجب أن تكتب أَنَ
  //TODO: إشباع هاء ضمير الغائب
  arood_writing(poem: string) {
    var words = poem.split(' ');
    var arood_words = '';
    for (var i = 0; i < words.length; i++) {
      var w1 = this.arood_word(arood_words, words[i], i == 0, i == words.length - 1);
      arood_words = w1;
    }

    return arood_words;
  }

  //TODO: حروف الجر والعطف والتشبيه التي تتصل مع ال التعريف
  arood_word(prev_word: string, word: string, first_word: boolean, last_word: boolean) {
    //check for hidden alephs:
    var possibility: string = this.hidden_aleph.get(word);

    //حذف ألف الوصل لو كانت في غير موضع قطع (بداية البيت)
    if (possibility) {
      word = possibility;
    }
    //remove non-spoken characters..
    

    if (word.startsWith('ال')) {
      //startingIndex = 1;
      if (word[2] == this.sokoon) {
        //remove it
        word = this.replaceAt(word, 2, '');
      }

      if (this.الحروف_الشمسية.includes(word[2])) {

        //if shamsy letter has shaddah, remove it and replace it by random harakah
        if (word[3] == this.shaddah) {
          word = this.replaceAt(word, 3, this.فتحة);
        }

        word = this.replaceAt(word, 1, word[2] + this.sokoon);
      } else if (this.الحروف_القمرية.includes(word[2])) {
        //do nothing
      }

      //remove الألف الساكنة
    }

    if (word.startsWith('ا')) {
      if (!first_word) {
        word = word.substr(1);
      } else {
        word = this.replaceAt(word, 0, 'أَ');
      }

    }

    //go through characters one by one and check for tanween and شدة
    for (var i = 1; i <= word.length; i += 2) {

      if (word[i - 1] == this.مد) {
        word = this.replaceAt(word, i - 1, 'أَاْ');
        i += 2;
        continue;
      }

      //assume sokoon
      if (i == word.length || ( //if no sokoon at last letter
        word[i] !== this.sokoon &&
        word[i] !== this.فتحة &&
        word[i] !== this.ضمة &&
        word[i] !== this.كسرة &&
        word[i] !== this.تنوين_كسر &&
        word[i] !== this.تنوين_فتح &&
        word[i] !== this.تنوين_ضم &&
        word[i] !== this.shaddah)) {
        word = this.replaceAt(word, i - 1, word[i - 1] + this.sokoon);
        continue;
      }

      //replace shaddah
      if (word[i] == this.shaddah) {

        word = this.replaceAt(word, i - 1, word[i - 1] + this.sokoon);
        word = this.replaceAt(word, i + 1, word[i - 1] + this.فتحة);

        i += 2;

        if (word[i + 1] == this.ضمة ||
          word[i + 1] == this.فتحة ||
          word[i + 1] == this.كسرة ||
          word[i + 1] == this.sokoon) {
          //remove it
          word = this.replaceAt(word, i + 1, '');
        }
      }

      //add tanween
      if (word[i] == this.تنوين_فتح) {
        //TODO check tanween is before last for sure, and is not a mistake
        word = this.replaceAt(word, i + 1, this.نون_ساكنة);
        word = this.replaceAt(word, i, this.فتحة);
        i += 2;
      } else if (word[i] == this.تنوين_ضم) {
        word = this.replaceAt(word, i, this.نون_ساكنة);
        word = this.replaceAt(word, i - 1, word[i - 1] + this.ضمة);
        i += 2;
      } else if (word[i] == this.تنوين_كسر) {
        word = this.replaceAt(word, i, this.نون_ساكنة);
        word = this.replaceAt(word, i - 1, word[i - 1] + this.كسرة);
        i += 2;
      }

      //ألف المد
    }

    //التقاء ساكنين بين كلمتين منفصلتين
    if (word[1] == this.sokoon && prev_word[prev_word.length - 1] == this.sokoon) {
      prev_word = this.replaceAt(prev_word, prev_word.length - 1, '');
      prev_word = this.replaceAt(prev_word, prev_word.length - 1, '');
    }

    //التقاء ساكنين في كلمة واحدة
    for (var i = 3; i < word.length - 1; i += 2) {
      if(word[i] == this.sokoon && word[i-2] == this.sokoon) {
        // إلا في حالات المد
        word = this.replaceAt(word, i-3, '');
        word = this.replaceAt(word, i-3, '');
        i -= 2;
        
      }
    }

    //إشباع حركة العروض والضرب
    //TODO: exceptions? like
    //إذا الشعب يومًا أراد الحياةَ
    if (last_word) {
      if (word[word.length - 1] == this.فتحة ||
        word[word.length - 1] == this.ضمة ||
        word[word.length - 1] == this.كسرة) {
        word = word + 'وْ'; // random letter at end of word
      }
    }

    return prev_word + word;
  }

  convert_to_bits(shatr: string) {
    var result = '';
    for (var i = 1; i < shatr.length; i += 2) {
      if (shatr[i] !== this.sokoon) {
        result += '1';
      } else {
        result += '0';
      }
    }
    console.log(shatr, result);

    return result;
  }

  //TODO: التصريع هو أن يكون العرض والضروب على وزن واحد في أول بيت من القصيدة..
  //وهو يدخل على البحور كلها

  الطويل(صدر, عجز) {
    // TODO: البيت المصرع من الممكن أن ينتهي بـ مفاعيلن في العروض
    var sadr_reg: RegExp = new RegExp('^(' + this.فعولن + '|' + this.faolo + '|' + this.falon + '|' + this.fal + ')' + //فعلن وفعل قبيحات
      '(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')' +
      '(' + this.فعولن + '|' + this.faolo + ')' + (this.مفاعلن) + '$');

    var ajz_reg: RegExp = new RegExp('^(' + this.فعولن + '|' + this.faolo + '|' + this.falon + '|' + this.fal + ')' + //فعلن وفعل قبيحات
      '(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')' +
      '(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.مفاعلن + '|' + this.مفاعيلن + '|' + this.فعولن + ')$');


    if (sadr_reg.test(صدر) && ajz_reg.test(عجز)) {
      return true;
    }

    return false;
  }

  المتقارب(صدر, عجز) {
    var sadr_tam_reg: RegExp = new RegExp('^(' + this.فعولن + '|' + this.faolo + '|' + this.falon + '|' + this.fal + ')' +
      '(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.فعولن + '|' + this.faolo + '|' + this.faal+ ')$');
    var ajz_tam_reg: RegExp = new RegExp('^(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.فعولن + '|' + this.faool + '|' + this.faal+ '|' + '10' + ')$');//فَع

    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.فعولن + '|' + this.faolo + '|' + this.falon + '|' + this.fal + ')' +
      '(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.faal+ ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.فعولن + '|' + this.faolo + ')' +
      '(' + this.faal+ '|' + '10' + ')$');//فَع


    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('majzoo');
      return true;
    }
    return false;
  }

  البسيط(صدر, عجز) {

    //الجوازات:
    //مستفعلن -> متفعلن : حسن إذا لحقه في أول الصدر وأول العجز.. قليل وغير مستحسن في غيره
    //مستفعلن -> مفتعلن: وهو قليل ويسمى الطي
    // مستفعلن -> متعلن: نادر جدا، وقبيح جدا، ويسمى الخبل
    //فاعلن -> فعلن: وهو حسن

    var sadr_tam_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.faelon + ')$');
    var ajz_tam_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.faelon + '|' + this.falon + ')$');

    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.مفتعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.مستفعلان + '|' + this.مفعولن + ')$');

    var sadr_majzoo_reg2: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + /*'|' +this.faolo + */')' +
      '(' + this.مفعولن + /*'|' +this.faolo + '|' + this.fal + */')$');
    var ajz_majzoo_reg2: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + /*'|' +this.faolo + */')' +
      '(' + this.مفعولن + ')$');
    var sadr_majzoo_reg3: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.فعولن + ')$');
    var ajz_majzoo_reg3: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.فعولن + ')$');
    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('majzoo1');
      return true;
    }

    if (sadr_majzoo_reg2.test(صدر) && ajz_majzoo_reg2.test(عجز)) {
      console.log('majzoo2');
      return true;
    }

    if (sadr_majzoo_reg3.test(صدر) && ajz_majzoo_reg3.test(عجز)) {
      console.log('majzoo3');
      return true;
    }

    return false;
  }

  الرجز(صدر, عجز) {

    //مستفعلن -> متعلن: وهو قبيح
    //مفعولن -> فعولن: ضرب التام المقطوع فقط
    var sadr_tam_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');

    var ajz_tam_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.مفعولن + '|' + this.فعولن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');

    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');

    var sadr_mashtoor_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');

    var sadr_manhook_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');

    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('majzoo');
      return true;
    }

    if (sadr_mashtoor_reg.test(صدر) && !عجز) {
      console.log('مشطور');
      return true;
    }

    if (sadr_manhook_reg.test(صدر) && !عجز) {
      console.log('منهوك');
      return true;
    }
    return false;
  }

  السريع(صدر, عجز) {

    //مستفعلن -> متعلن: وهو قبيح
    //مفعولان -< فعولان
    var sadr_tam_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')$');

    var ajz_tam_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.فاعلان + '|' + this.فاعلن + '|' + this.falon + ')$');


    var sadr_tam_reg2: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.faelon + ')$');

    var ajz_tam_reg2: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.faelon + ')$');


    var sadr_mashtoor_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مفعولان + '|' + this.فعولان + '|' + this.مفعولن + '|' + this.فعولن + ')$');


    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }

    if (sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
      console.log('tam2');
      return true;
    }

    if (sadr_mashtoor_reg.test(صدر) && !عجز) {
      console.log('مشطور');
      return true;
    }

    return false;

  }

  المنسرح(صدر, عجز) {
    //مستفعلن -> متعلن: وهو قبيح
    //مفعولات -> فعولات وهو قبيح
    //مفعولات -> فعلات وهو قبيح جدا!

    var sadr_tam_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مفعولات + '|' + this.فاعلات + '|' + this.فعولات + '|' + this.فعلات + ')' +
      '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')$');

    var ajz_tam_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مفعولات + '|' + this.فاعلات + '|' + this.فعولات + '|' + this.فعلات + ')' +
      '(' + this.مفعولن + '|' + this.فعولن + '|' + this.مفتعلن + ')$');

    var sadr_manhook_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
      '(' + this.مفعولان + '|' + this.فعولان + '|' + this.مفعولن + '|' + this.فعولن + ')$');


    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }

    if (sadr_manhook_reg.test(صدر) && !عجز) {
      console.log('منهوك');
      return true;
    }

    return false;
  }

  الكامل(صدر, عجز) {
    //فعلاتن: هذا الضرب يجوز موافقة العروض له في البيت المصرع وقد يلحق أحدهما أو كليهما الإضمار، وهو تسكين الثاني المتحرك. 
    //متفاعلن -> مفاعلن، ليس بالحسن
    //متفاعلن -> مفتعلن وهو قبيح جدا
    var sadr_tam_reg: RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')$');
    var ajz_tam_reg: RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.فعلاتن + '|' + this.falon + '|' + this.مفتعلن + ')$');
    var sadr_tam_reg2: RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.faelon + ')$');
    var ajz_tam_reg2: RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.faelon + '|' + this.falon + ')$');
    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
      '(' + this.متفاعلن + '|' + this.motfaelon + '|' + this.مفاعلن + '|' + this.مفتعلن + '|' + this.متفاعلاتن + '|' + this.متفاعلان + '|' + this.فعلاتن + ')$');

    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }

    if (sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
      console.log('tam');
      return true;
    }

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }


    return false;
  }

  الوافر(صدر, عجز) {

    //مفاعلتن -> مفاعلن: نادر وقبيح
    //مفاعلتن ->     مُفاعيلٌ: زحاف نادر وقبيح
    //مفاعلتن -> مفتعلن: وهو زحاف نادر وقبيح

    var sadr_tam_reg: RegExp = new RegExp('^(' + this.مفاعلتن + '|' + this.mofaelton + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
      '(' + this.مفاعلتن + '|' + this.mofaelton + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
      '(' + this.فعولن + ')$');
    var ajz_tam_reg: RegExp = new RegExp('^(' + this.مفاعلتن + '|' + this.mofaelton + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
      '(' + this.مفاعلتن + '|' + this.mofaelton + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
      '(' + this.فعولن + ')$');

    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.مفاعلتن + '|' + this.mofaelton + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
      '(' + this.مفاعلتن + '|' + this.mofaelton + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')$');

    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.مفاعلتن + '|' + this.mofaelton + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
      '(' + this.مفاعلتن + '|' + this.mofaelton + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')$');

    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('تام');
      return true;
    }

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;

  }

  المديد(صدر, عجز) {

    //فاعلاتن -> فعلات: زحاف قبيح
    //فاعلاتن -> فعلات: نادر وقبيح جدا
    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.فاعلاتن + '|' + this.فعلاتن + ')$');
    var sadr_majzoo_reg2: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.فاعلن + ')$');
    var ajz_majzoo_reg2: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.فاعلان + '|' + this.فاعلن + '|' + this.falon + ')$');
    var sadr_majzoo_reg3: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.faelon + ')$');
    var ajz_majzoo_reg3: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')' +
      '(' + this.faelon + '|' + this.falon + ')$');


    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    if (sadr_majzoo_reg2.test(صدر) && ajz_majzoo_reg2.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    if (sadr_majzoo_reg3.test(صدر) && ajz_majzoo_reg3.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;
  }

  الرمل(صدر, عجز) {

    var sadr_tam_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')$');
    var ajz_tam_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلاتن + '|' + this.faelon + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')' +
      '(' + this.فاعلاتن + '|' + this.فاعلان + '|' + this.فاعلن + '|' + this.فعلاتن + '|' + this.فعلات + '|' + this.faelon + ')$');//check

    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلاتن + '|' + this.faelon + '|' + this.فعلات + '|' + this.فعلاتن + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
      '(' + this.فاعلاتان + '|' + this.فاعلاتن + '|' + this.فاعلن + '|' + this.فعلاتن + '|' + this.فعلات + '|' + this.فعلاتن + '|' + this.faelon + ')$');

    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('تام');
      return true;
    }


    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;
  }

  /*
      var sadr_tam_reg : RegExp = new RegExp('^()'+
                                            '()'+
                                            '()$');
  */
  الخفيف(صدر, عجز) {

    //فاعلاتن -> فاعلاتُ: يقع في الحشو والعروض وهو نادر مستكره
    //مستفعلن -> مستفعل: قبيح ونادر
    //مستفعلن -> متفعل: قبيح جدا
    var sadr_tam_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')' +
      '(' + this.فاعلاتن + '|' + this.فعلاتن + ')$');

    var ajz_tam_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')' +
      '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.مفعولن + '|' + this.فاعلن + '|' + this.faelon + ')$');

    var sadr_tam_reg2: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')$');

    var ajz_tam_reg2: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')' +
      '(' + this.فاعلن + '|' + this.faelon + ')$');

    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
      '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.فعولن + ')$');

    if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('تام');
      return true;
    }

    if (sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
      console.log('تام');
      return true;
    }


    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;
  }

  الهزج(صدر, عجز) {
    //مفاعيلن > مفاعلن وهو نادر وقبيح
    //
    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')' +
      '(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')' +
      '(' + this.مفاعيلن + '|' + this.فعولن + ')$');

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;
  }

  المضارع(صدر, عجز) {
    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.مفاعيل + '|' + this.فاعلن + '|' + this.مفعول + ')' +
      '(' + this.فاعلاتن + '|' + this.فاعلات + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.مفاعيل + '|' + this.فاعلن + '|' + this.مفعول + ')' +
      '(' + this.فاعلاتن + ')$');

    var sadr_majzoo_reg2: RegExp = new RegExp('^(' + this.مفاعلن + '|' + this.فاعلن + '|' + this.مفعول + ')' +
      '(' + this.فاعلاتن + '|' + this.فاعلات + ')$');
    var ajz_majzoo_reg2: RegExp = new RegExp('^(' + this.مفاعلن + '|' + this.فاعلن + '|' + this.مفعول + ')' +
      '(' + this.فاعلاتن + ')$');

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    if (sadr_majzoo_reg2.test(صدر) && ajz_majzoo_reg2.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;
  }

  المجتث(صدر, عجز) {
    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعل + '|'+ this.متفعلن + '|' + this.مستفعل + ')' +
      '(' + this.فاعلاتن + '|' + this.فعلاتن + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعل + '|'+ this.متفعلن + '|' + this.مستفعل + ')' +
      '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.مفعولن + ')$');

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;
  }

  المقتضب(صدر, عجز) {
    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلات + '|' + this.مفاعيل + ')' +
      '(' + this.مفتعلن + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلات + '|' + this.مفاعيل + ')' +
      '(' + this.مفتعلن + ')$');

    if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;
  }

  المتدارك(صدر, عجز) {
    var sadr_tam_reg: RegExp = new RegExp('^(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')$');
    var ajz_tam_reg: RegExp = new RegExp('^(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')$');

    var sadr_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')$');
    var ajz_majzoo_reg: RegExp = new RegExp('^(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + ')' +
      '(' + this.فاعلن + '|' + this.falon + '|' + this.faelon + '|' + this.فاعلان + '|' + this.فعلاتن + ')$');

      if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
        console.log('tam');
        return true;
      }
  
      if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
        console.log('majzoo1');
        return true;
      }

      return false;
  }

  replaceAt(w: string, index: number, replacement: string) {
    return w.substr(0, index) + replacement + w.substr(index + 1);
  }
}
