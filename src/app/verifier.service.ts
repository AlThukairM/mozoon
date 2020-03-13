import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifierService {

  hidden_aleph = new Map();
  الحروف_الشمسية = ['ت','ث','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ن'];
  الحروف_القمرية = ['أ','إ','ب','ج','ح','خ','ع','غ','ف','ق','ك','م','ه','و','ل', 'ي'];
  shaddah = 'ّ';
  sokoon : string = 'ْ';
  تنوين_فتح = 'ً';
  تنوين_كسر = 'ٍ';
  تنوين_ضم = 'ٌ';
  نون_ساكنة =  'نْ';
  فتحة = 'َ';
  ضمة = 'ُ';
  كسرة = 'ِ';
  مد = 'آ';
  tanween = ['ً','ٍ','ٌ'];
  فعولن = '11010';
  فاعلن = '10110';
  مفاعيلن = '1101010';
  مفاعلتن = '1101110';
  مفاعلْتن = '1101010';
  متفاعلن = '1110110';
  متْفاعلن = '1010110';
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
  فعولُ = '1101';
  فعولْ = '1100';
  فعْلن = '1010';
  فعِلن = '1110';
  فعْل = '101';
  فعَل = '110';
  مفاعيل = '110101';
  مستفعلان = '10101100';
  مفعولن = '101010';
  مفعولان = '1010100';
  فعولان = '110100';
  فاعلاتان = '10110100';


  constructor() { 
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
  //  - ألف التنوين لاتشكل
  //  - ألف المد لاتشكل
  //  - لاتشكيل يعني سكون
  //  - ضمير الغائب مشبع
  //
  //TODO: support full poems
  verify(poem: string) {
    //كتابة عروضية

    //TODO remove extraneous spaces
    var أشطر = poem.split('***');
    var صدر = this.arood_writing(أشطر[0].trim());
    //if(!أشطر[1]) {return; }//TODO دعم البيت المشطور
    var عجز;
    if(أشطر[1]) {
      عجز = this.arood_writing(أشطر[1].trim());
    }

    var sadr_in_bits = this.convert_to_bits(صدر);

    var ajz_in_bits;
    if(عجز) {
      ajz_in_bits = this.convert_to_bits(عجز);
    }
    
    
    //compare with بحور
    if(this.الطويل(sadr_in_bits, ajz_in_bits)) {//1
      console.log('البحر الطويل');
    }

    if(this.المتقارب(sadr_in_bits, ajz_in_bits)) {//2
      console.log('البحر المتقارب');
    }

    if(this.البسيط(sadr_in_bits, ajz_in_bits)) {//3
      console.log('البحر البسيط');
    }

    if(this.الرجز(sadr_in_bits, ajz_in_bits)) {//4
      console.log('بحر الرجز');
    }

    if(this.السريع(sadr_in_bits, ajz_in_bits)) {//5
      console.log('البحر السريع');
    }

    if(this.المنسرح(sadr_in_bits, ajz_in_bits)) {//6
      console.log('البحر المنسرح');
    }

    if(this.الكامل(sadr_in_bits, ajz_in_bits)) {//7
      console.log('البحر الكامل');
    }

    if(this.الوافر(sadr_in_bits, ajz_in_bits)) {//8
      console.log('البحر الوافر');
    }

    if(this.المديد(sadr_in_bits, ajz_in_bits)) {//9
      console.log('البحر المديد')
    }

    if(this.الرمل(sadr_in_bits, ajz_in_bits)) {//10
      console.log('بحر الرمل');
    }

    if(this.الخفيف(sadr_in_bits, ajz_in_bits)) {//11
      console.log('البحر الخفيف')
    }

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
    var possibility : string = this.hidden_aleph.get(word);
    
    //حذف ألف الوصل لو كانت في غير موضع قطع (بداية البيت)
    if(possibility) {
      word = possibility;
    }
    //remove non-spoken characters..
    var startingIndex = 0;

    if(word.startsWith('ال')) {
      //startingIndex = 1;
      if(word[2] == this.sokoon) {
        //remove it
        word = this.replaceAt(word, 2, '');
      }

      if(this.الحروف_الشمسية.includes(word[2])) {
        
        //if shamsy letter has shaddah, remove it and replace it by random harakah
        if(word[3] == this.shaddah) {
          word = this.replaceAt(word, 3, this.فتحة);
        }
        
        word = this.replaceAt(word, 1, word[2]+this.sokoon);
      } else if(this.الحروف_القمرية.includes(word[2])) {
        //do nothing
      }

      //remove الألف الساكنة
    }

    if(word.startsWith('ا')) {
      if(!first_word) {
        word = word.substr(1);
      } else {
        word = this.replaceAt(word, 0, 'أَ');
      }

    }

    //go through characters one by one and check for tanween and شدة
    for(var j = startingIndex; j < word.length; j += 2) {

      var i = j + 1;
      //assume sokoon
      if( i == word.length || ( //if no sokoon at last letter
        word[i] !== this.sokoon &&
        word[i] !== this.فتحة &&
        word[i] !== this.ضمة &&
        word[i] !== this.كسرة &&
        word[i] !== this.تنوين_كسر &&
        word[i] !== this.تنوين_فتح && 
        word[i] !== this.تنوين_ضم &&
        word[i] !== this.shaddah)) {
          word = this.replaceAt(word, i-1, word[i-1]+this.sokoon);
          continue;
      }

      if(word[i-1] == this.مد) {
        word = this.replaceAt(word, i-1, 'أَاْ');
        i += 2;
        continue;
      } 

      //replace shaddah
      if(word[i] == this.shaddah) {

        word = this.replaceAt(word, i - 1, word[i-1]+this.sokoon);
        word = this.replaceAt(word, i + 1, word[i-1]+this.فتحة);

        i+=2;

        if(word[i+1] == this.ضمة ||
            word[i+1] == this.فتحة ||
            word[i+1] == this.كسرة ||
            word[i+1] == this.sokoon) {
          //remove it
          word = this.replaceAt(word, i+1, '');
        }
      }

      //add tanween
      if(word[i] == this.تنوين_فتح) {
        //TODO check tanween is before last for sure, and is not a mistake
        word = this.replaceAt(word, i + 1, this.نون_ساكنة);
        word = this.replaceAt(word, i, this.فتحة);
        i += 2;
      } else if(word[i] == this.تنوين_ضم) {
        word = this.replaceAt(word, i, this.نون_ساكنة);
        word = this.replaceAt(word, i - 1, word[i-1]+this.ضمة);
        i += 2;
      } else if(word[i] == this.تنوين_كسر) {
        word = this.replaceAt(word, i, this.نون_ساكنة);
        word = this.replaceAt(word, i - 1, word[i-1]+this.كسرة);
        i += 2;
      }
      
      //ألف المد
    }

        //التقاء ساكنين
    if(word[1] == this.sokoon && prev_word[prev_word.length - 1] == this.sokoon) {
          prev_word = this.replaceAt(prev_word, prev_word.length - 1, '');
          prev_word = this.replaceAt(prev_word, prev_word.length - 1, '');
    }

    //إشباع حركة العروض والضرب
    //TODO: exceptions? like
    //إذا الشعب يومًا أراد الحياةَ
    if(last_word) {
      if(word[word.length - 1] == this.فتحة ||
        word[word.length - 1] == this.ضمة ||
        word[word.length - 1] == this.كسرة) {
          word = word + 'وْ'; // random letter at end of word
        }
    }

    return prev_word + word;
  }

  convert_to_bits(shatr : string) {
    var result = '';
    for(var i = 1; i  < shatr.length; i += 2) {
      if(shatr[i] !== this.sokoon) {
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
    var sadr_reg : RegExp = new RegExp('^(' + this.فعولن + '|' + this.فعولُ + '|' + this.فعْلن + '|' + this.فعْل +')' + //فعلن وفعل قبيحات
                                        '(' + this.مفاعيلن + '|' + this. مفاعلن + '|' + this.مفاعيل + ')' +
                                        '(' + this.فعولن + '|' + this.فعولُ + ')' + (this.مفاعلن) + '$');
    
    var ajz_reg : RegExp = new RegExp('^(' + this.فعولن + '|' + this.فعولُ + '|' + this.فعْلن + '|' + this.فعْل +')' + //فعلن وفعل قبيحات
                                        '(' + this.مفاعيلن + '|' + this. مفاعلن + '|' + this.مفاعيل + ')' +
                                        '(' + this.فعولن + '|' + this.فعولُ + ')' +
                                        '(' +this.مفاعلن + '|'+ this.مفاعيلن + '|' + this.فعولن + ')$');
    

    if(sadr_reg.test(صدر) && ajz_reg.test(عجز)) {
      return true;
    }

    return false;
  }

  المتقارب(صدر, عجز) {
    var sadr_tam_reg : RegExp = new RegExp('^(' + this.فعولن + '|' +this.فعولُ + '|' +this.فعْلن + '|' +this.فعْل +')' + 
                                        '(' + this.فعولن + '|' +this.فعولُ + ')' +
                                        '(' + this.فعولن + '|' +this.فعولُ + ')' +
                                        '(' + this.فعولن + '|' +this.فعولُ + '|' + this.فعَل + ')$');
    var ajz_tam_reg : RegExp = new RegExp('^(' + this.فعولن + '|' +this.فعولُ + ')' + 
                                        '(' + this.فعولن + '|' +this.فعولُ + ')' +
                                        '(' + this.فعولن + '|' +this.فعولُ + ')' +
                                        '(' + this.فعولن + '|' + this.فعولْ + '|' + this.فعَل + '|' + '10' +')$');//فَع

    var sadr_majzoo_reg : RegExp = new RegExp('^(' + this.فعولن + '|' +this.فعولُ + '|' +this.فعْلن + '|' +this.فعْل +')' + 
                                        '(' + this.فعولن + '|' +this.فعولُ + ')' +
                                        '(' + this.فعَل + ')$');
    var ajz_majzoo_reg : RegExp = new RegExp('^(' + this.فعولن + '|' +this.فعولُ + ')' + 
                                        '(' + this.فعولن + '|' +this.فعولُ + ')' +
                                        '(' + this.فعَل + '|' + '10' +')$');//فَع
    

    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }
    
    if(sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
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

    var sadr_tam_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' + 
                                            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
                                            '(' + this.فعِلن + ')$');
    var ajz_tam_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' + 
                                            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن +')' +
                                            '(' + this.فعِلن + '|' +this.فعْلن + ')$');

    var sadr_majzoo_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.مفتعلن + ')' + 
                                              '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                              '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن +')$');
    var  ajz_majzoo_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن +')' + 
                                              '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                              '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +this.مستفعلان + '|' + this.مفعولن + ')$');

    var sadr_majzoo_reg2 : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن +')' + 
                                              '(' + this.فاعلن + '|' + this.فعِلن + /*'|' +this.فعولُ + */')' +
                                              '(' + this.مفعولن + /*'|' +this.فعولُ + '|' + this.فعَل + */')$');
    var  ajz_majzoo_reg2 : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن +')' + 
                                              '(' + this.فاعلن + '|' + this.فعِلن + /*'|' +this.فعولُ + */')' +
                                              '(' + this.مفعولن + ')$');
    var sadr_majzoo_reg3 : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن +')' + 
                                              '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                              '(' + this.فعولن + ')$');
    var  ajz_majzoo_reg3 : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن +')' + 
                                              '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                              '(' + this.فعولن + ')$');
    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }
    
    if(sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('majzoo1');
      return true;
    }

    if(sadr_majzoo_reg2.test(صدر) && ajz_majzoo_reg2.test(عجز)) {
      console.log('majzoo2');
      return true;
    }

    if(sadr_majzoo_reg3.test(صدر) && ajz_majzoo_reg3.test(عجز)) {
      console.log('majzoo3');
      return true;
    }

    return false;
  }

  الرجز(صدر, عجز) {

    //مستفعلن -> متعلن: وهو قبيح
    //مفعولن -> فعولن: ضرب التام المقطوع فقط
    var sadr_tam_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' + 
                                              '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
                                              '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');

    var ajz_tam_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' + 
                                              '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
                                              '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.مفعولن + '|' + this.فعولن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');

    var sadr_majzoo_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' + 
                                              '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$'); 
    var ajz_majzoo_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' + 
                                              '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$'); 
    
    var sadr_mashtoor_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' + 
                                      '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
                                      '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');

    var sadr_manhook_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' + 
                                                '(' + this.مستفعلن + '|' +  this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$'); 

    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }
                                                
    if(sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('majzoo');
      return true;
    }

    if(sadr_mashtoor_reg.test(صدر) && !عجز) {
      console.log('مشطور');
      return true;
    }

    if(sadr_manhook_reg.test(صدر) && !عجز) {
      console.log('منهوك');
      return true;
    }
    return false;
  }

  السريع(صدر, عجز) {
    
    //مستفعلن -> متعلن: وهو قبيح
    //مفعولان -< فعولان
    var sadr_tam_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' + 
                                            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' +
                                            '(' + this.فاعلن + '|' + this.فعِلن +')$');

    var ajz_tam_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' + 
                                            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' +
                                            '(' + this.فاعلان + '|' + this.فاعلن + '|' + this.فعْلن + ')$');
    

    var sadr_tam_reg2 : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' + 
                                            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' +
                                            '(' + this.فعِلن + ')$');

    var ajz_tam_reg2 : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' + 
                                            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' +
                                            '(' + this.فعِلن + ')$');


    var sadr_mashtoor_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' + 
                                                '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' +
                                                '(' + this.مفعولان + '|' + this.فعولان + '|' + this.مفعولن + '|' + this.فعولن + ')$');
    

    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }
                                                
    if(sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
      console.log('tam2');
      return true;
    }

    if(sadr_mashtoor_reg.test(صدر) && !عجز) {
      console.log('مشطور');
      return true;
    }  
    
    return false;

  }

  المنسرح(صدر, عجز) {
    //مستفعلن -> متعلن: وهو قبيح
    //مفعولات -> فعولات وهو قبيح
    //مفعولات -> فعلات وهو قبيح جدا!

    var sadr_tam_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' + 
                                            '(' + this.مفعولات + '|' + this.فاعلات + '|' + this.فعولات + '|' + this.فعلات + ')' +
                                            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')$');

    var ajz_tam_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' + 
                                            '(' + this.مفعولات + '|' + this.فاعلات + '|' + this.فعولات + '|' + this.فعلات + ')' +
                                            '(' + this.مفعولن + '|' + this.فعولن + '|' + this.مفتعلن + ')$');

    var sadr_manhook_reg : RegExp = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' +  this.متعلن + ')' + 
                                            '(' + this.مفعولان + '|' + this.فعولان + '|' + this.مفعولن + '|' + this.فعولن + ')$');


    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }

    if(sadr_manhook_reg.test(صدر) && !عجز) {
      console.log('منهوك');
      return true;
    }  
    
    return false;
  }

  الكامل(صدر, عجز) {
    //فعلاتن: هذا الضرب يجوز موافقة العروض له في البيت المصرع وقد يلحق أحدهما أو كليهما الإضمار، وهو تسكين الثاني المتحرك. 
    //متفاعلن -> مفاعلن، ليس بالحسن
    //متفاعلن -> مفتعلن وهو قبيح جدا
    var sadr_tam_reg : RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' + 
                                            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
                                            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')$');
    var ajz_tam_reg : RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' + 
                                            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
                                            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.فعلاتن + '|' + this.فعْلن + '|' + this.مفتعلن + ')$');
    var sadr_tam_reg2 : RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' + 
                                            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
                                            '(' + this.فعِلن + ')$');
    var ajz_tam_reg2 : RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' + 
                                            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
                                            '(' + this.فعِلن + '|' + this.فعْلن + ')$');
    var sadr_majzoo_reg : RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' + 
                                            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')$');
    var ajz_majzoo_reg : RegExp = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن +')' + 
                                            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + '|' +  this.متفاعلاتن + '|' +  this.متفاعلان + '|' +  this.فعلاتن + ')$');
  
    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('tam');
      return true;
    }
                                                
    if(sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
      console.log('tam');
      return true;
    }

    if(sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }  
    

    return false;
  }

  الوافر(صدر, عجز) {

    //مفاعلتن -> مفاعلن: نادر وقبيح
    //مفاعلتن ->     مُفاعيلٌ: زحاف نادر وقبيح
    //مفاعلتن -> مفتعلن: وهو زحاف نادر وقبيح

    var sadr_tam_reg : RegExp = new RegExp('^(' + this.مفاعلتن + '|'+ this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' + 
                                            '(' + this.مفاعلتن + '|'+ this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
                                            '(' + this.فعولن + ')$');
    var ajz_tam_reg : RegExp = new RegExp('^(' + this.مفاعلتن + '|'+ this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' + 
                                            '(' + this.مفاعلتن + '|'+ this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
                                            '(' + this.فعولن + ')$');

    var sadr_majzoo_reg : RegExp = new RegExp('^(' + this.مفاعلتن + '|'+ this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' + 
                                            '(' + this.مفاعلتن + '|'+ this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')$');
    
    var ajz_majzoo_reg : RegExp = new RegExp('^(' + this.مفاعلتن + '|'+ this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' + 
                                            '(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')$');

    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('تام');
      return true;
    }

    if(sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    } 

    return false;

  }

  المديد(صدر, عجز) {

  //فاعلاتن -> فعلات: زحاف قبيح
    //فاعلاتن -> فعلات: نادر وقبيح جدا
    var sadr_majzoo_reg : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                            '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')$');    
    var ajz_majzoo_reg : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                            '(' + this.فاعلاتن + '|' + this.فعلاتن + ')$');
    var sadr_majzoo_reg2 : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                            '(' + this.فاعلن + ')$');   
    var ajz_majzoo_reg2 : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                            '(' + this.فاعلان + '|' + this.فاعلن + '|' + this.فعْلن + ')$');                                                                                         
    var sadr_majzoo_reg3 : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                            '(' + this.فعِلن + ')$');   
    var ajz_majzoo_reg3 : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
                                            '(' + this.فعِلن + '|' + this.فعْلن + ')$');
    
    
    if(sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }
    
    if(sadr_majzoo_reg2.test(صدر) && ajz_majzoo_reg2.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    if(sadr_majzoo_reg3.test(صدر) && ajz_majzoo_reg3.test(عجز)) {
      console.log('مجزوء');
      return true;
    }

    return false;
  }

  الرمل(صدر, عجز) {

    var sadr_tam_reg : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                                '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')' +
                                                '(' + this.فاعلن + '|' + this.فعِلن + ')$');    
    var ajz_tam_reg : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                              '(' + this.فاعلاتن + '|' + this.فعِلن + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')' +
                                              '(' + this.فاعلاتن + '|' + this.فاعلان + '|' + this.فاعلن + '|' + this.فعلاتن + '|' + this.فعلات + '|' + this.فعِلن + ')$');//check

    var sadr_majzoo_reg : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                              '(' + this.فاعلاتن + '|' + this.فعِلن + '|' + this.فعلات + '|' + this.فعلاتن + ')$');    
    var ajz_majzoo_reg : RegExp = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' + 
                                            '(' + this.فاعلاتان + '|' + this.فاعلاتن + '|' + this.فاعلن + '|' + this.فعلاتن + '|' + this.فعلات + '|' + this.فعلاتن + '|' + this.فعِلن + ')$');
  
    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('تام');
      return true;
    }
    
    
    if(sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
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
    var sadr_tam_reg : RegExp = new RegExp('^('+this.فاعلاتن + '|' + this.فعلاتن+')'+
                                            '('+this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن+')'+
                                            '('+this.فاعلاتن + '|' + this.فعلاتن+')$');
    
    var ajz_tam_reg : RegExp = new RegExp('^('+this.فاعلاتن + '|' + this.فعلاتن+')'+
                                          '('+this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن+')'+
                                          '('+this.فاعلاتن + '|' + this.فعلاتن + '|' + this.مفعولن + '|' + this.فاعلن + '|' + this.فعِلن + ')$');

    var sadr_tam_reg2 : RegExp = new RegExp('^('+this.فاعلاتن + '|' + this.فعلاتن+')'+
                                          '('+this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن+')'+
                                          '('+this.فاعلن + '|' + this.فعِلن+')$');
  
    var ajz_tam_reg2 : RegExp = new RegExp('^('+this.فاعلاتن + '|' + this.فعلاتن+')'+
                                          '('+this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن+')'+
                                          '('+this.فاعلن + '|' + this.فعِلن + ')$');
    
    var sadr_majzoo_reg : RegExp = new RegExp('^('+this.فاعلاتن + '|' + this.فعلاتن+')'+
                                          '('+this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن+')$');
    var ajz_majzoo_reg : RegExp = new RegExp('^('+this.فاعلاتن + '|' + this.فعلاتن+')'+
                                          '('+this.مستفعلن + '|' + this.متفعلن +'|'+this.فعولن+')$');
  
    if(sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
      console.log('تام');
      return true;
    }

    if(sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
      console.log('تام');
      return true;
    }
    
    
    if(sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
      console.log('مجزوء');
      return true;
    }  

    return false;
  }

  replaceAt(w: string, index: number, replacement: string) {
    return w.substr(0, index) + replacement + w.substr(index + 1);
  }
}
