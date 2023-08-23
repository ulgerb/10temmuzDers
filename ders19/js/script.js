// *** YORUMLAR
// Tekli yorum satırı
/*
Çoklu yorum satırı
*/
/* 
merhaba
javascript
bugün 
js
görücez */


// DEĞİŞKEN TANIMLAMA
/* 
var 5deger = 55; // sayıyla başlayamayız
var -deger = 10 // sembollerle başlayamayız
var deg?er = // semboller başa ortaya veya sona gelemezler
var deg er = // değişken tanımlarken arada boşluk olmaz
 */
/* 
var deg5er = 10;
var deger5 = 10; // sayısal ifadeler ortaya veya sona gelebilir
var deger = 10; // sadece harf kullanarak oluşturabiliyoruz
var deGer = 10; // büyük harf olarak oluşturabilirim
var deger_ = 10; // alttire sembolü kullanılabilir
var deger$ = 10; // dolar işareti semolü kullanılabilir 
var deger_meyve = "elma"; 
 */

// *** Console
// console.log("javascript"); // consoleda görebilmemizi sağlar
// var deger = 10;
// console.log(deger);

// var deger1 = 100;
// var deger2 = 200;

// console.log(deger1 , deger2);
// console.log(deger1 + deger2);



// *** Değişken Türleri
// var deger1 = 100; // Number (sayısal değişkenler)
// var deger2 = "string" // String (sözel, metinsel değişkenler)
// var deger3 = [100,"string","elma","armut",200] // arr (liste değişkenler)
// var deger4 = {"key1":"value1", "key2":100 } // obje (sözlük değişkenler)
// var deger5 = false; // boolean (doğru yanlış değişkenler)
// var deger6 = null; // boş değişken
// console.log(typeof deger5); // değişken tipini gösterir


// + sayısal ifadeler toplama metinsel ifadeler birleştirme görevi görür
// , birbirinden farklı değişkenleri ayırmak için kullanılır.
// console.log("merhaba" + "javascript");
// console.log("merhaba" , "javascript");
// console.log(100 + 200);
// console.log("javascript" + 200);


// *** alert("Burası Uyarı mesaj kutusudur")
// alert("Hatalı Sayfa")
// alert(200 + 100)
// alert(200 , 100)

// *** OPERATÖR İŞLEMLERİ
// number(sayısal) veri türleri için kullanılır
// + toplama
// - çıkartma
// * çarpma
// / bölme
// % mod alma: bölümünden kalanı verir
// ** üstü veya kök alma

// var s1 = 110;
// var s2 = 20;
// var s3 = 10000;

// console.log("toplama:",s1+s2);
// console.log("çıkartma:",s1-s2);
// console.log("çarpma:", s1*s2);
// console.log("bölme:", s1/s2);
// console.log("mod(kalan):", s1%s2);
// console.log("üstü alma:", s2**2);
// console.log("kök alma:", s3**(1/2) );
// console.log("kök alma:", s3**(1/3));
// console.log("kök alma:", s3**(1/4));
// console.log("kök alma:", s3**(1/5));



// *** eşittir (==) kontrol
// *** Atama(=) İşlemi ve operatör yöntemleri

// var deger = "javascript";
// console.log(deger);

// 1 arttırma
// var s1 = 10;
// s1 = s1 + 1; // 1.yöntem
// s1 += 1 // 2.yöntem
// s1++ // 3.yöntem (yalnızca 1 arttırma için kullanılır)
// console.log(s1);

// var s2 = 20;
// s2++; // 21
// s2 += 5; // 26
// s2 = 20 + 5; // 25
// s2 = "js";
// console.log(s2);

// örn: 100 değerim olsun bu 100 değerini önce 1 arttır sonra 2 ile çarp ve 2 çıkarılcak
// tek bir değişken kullanılacak
// var s3 = 100;
// s3++;
// s3 = s3*2
// s3 -= 2
// console.log(s3);


// console.log(20 == 20); // karşılaştrma

// *** var let const

// var => değişkenleri tekrardan tanımlamamıza izin verir
// var x1 = 100;
// var x1 = "string ifade tanımladım";

// let => değişkenleri tekrardan tanımlamamıza izin vermez ama değiştirilmesine izin verir.
// let x2 = 100;
// let x2 = "string ifade tanımlayamadım";
// x2 = "string değer gönderdim";

// const => tekrardan tanımlamaya izin vermez ve değiştirilmesinede izin vermez.
// const x3 = 100;
// const x3 = "string ifade tanımlayamadım";
// x3 = "string değer gönderemedim";


// DEĞİŞKEN type değiştirme
// let s1 = 50;
// let s2 = "100";
// console.log(s1 + Number(s2));
// console.log(String(s1) + s2);

// let s3 = "150";
// let s4 = "350";
// console.log(Number(s3) + Number(s4));


// var s1 = 20;
// var s2 = "45";
// var s3 = 10;
// // 3045, 6510
// console.log( String(s3+s1) + s2 );
// console.log( String(Number(s2) + s1) + String(s3) );

// === alıştırmalar ===
// var s1 = 15;
// var s2 = "35";
// var s3 = "25";
// // 1560, 4035

// console.log( String(s1) + String(Number(s2)+Number(s3)) );
// console.log( String(s1+Number(s3)) + (s2) )



// s1=5 , s2="15", s3="20"
// // 535, 2010, 40
// var s1 = 5;
// var s2 = "15";
// var s3 = "20";

// console.log( String(s1) + String(Number(s2)+Number(s3)) );
// console.log( s3 + String( Number(s2) - s1 ) );
// console.log( s1 + Number(s2) + Number(s3) );



// s1=8 , s2="22", s3="10", s4=15
// // 3025, 4015, 327
// var s1 = 8;
// var s2 = "22";
// var s3 = "10";
// var s4 = 15;

// console.log( String(s1 + Number(s2)) + String(Number(s3) + s4) );
// console.log( String(s1 + Number(s2) + Number(s3)) + String(s4) );
// console.log( String(Number(s2) + Number(s3)) + String(s4-s1) );



// STRING METHODLARI
// var text = "Merhaba String methodları. split methodu listeler. javascript";
// text = text.toUpperCase();
// console.log(text);
// text = text.toLowerCase()
// console.log(text);


// *** length (uzunluk)
// console.log(text.length);


// var liste = text.split(" ")
// console.log(liste);

// // İNDEX BULMA - indexOf()
// // -1 sonucunu verirse yoktur
// var text_i = text.indexOf("method") // index numarasını bulmamızı sağlar
// console.log(text_i);
// var text_i = text.indexOf("method",20) // index numarasını bulmamızı sağlar
// console.log(text_i);
// var text_i = text.indexOf("python") // index numarasını bulmamızı sağlar
// console.log(text_i);


// *** STRING PARÇALAMA
// slice( başlangıç, bitiş )
// var text = "Merhaba String methodları. split methodu listeler. javascript";
// console.log( text[8] ); // S
// console.log(text.slice(8, 26)) // String methodları.
// console.log(text.slice(-10)); // javascript
// console.log(text.slice(-20, -10)); // listeler.



// var text2 = "Bugün işe eRkeN Gittim. Gün boyu erken uykulu gibiydim."
// // eRkeN Gittim. yazısını ekrana çıkart
// // index numaralarını başka değişkenlerde kaydedin, ve yazıyı ekrana çıkartın
// var s = text2.indexOf("eRkeN")
// var e = text2.indexOf(".")
// console.log(s,e);
// console.log( text2.slice(s,e+1) );

// // replace(eski değer, yeni değer)
// DÜZELTME
// text2 = text2.replace("eRkeN Gittim", "erken gittim")
// console.log(text2);
// ÇIKARTMA
// text2 = text2.replace("erken ","")
// console.log(text2);

// EKLEME
// text2 = text2.replace("eRkeN Gittim.", "erken gittim. Kahve içmediğim için, ")
// console.log(text2);



// Array


// var arr1 = ["elma","armut","kiraz", 100, ["sincap", "rakun", "timsah"]]
// console.log(arr1.length); // 5
// console.log(arr1[4]); // ['sincap', 'rakun', 'timsah']

// console.log( [10, 20, 30][1] ); // 20
// console.log( arr1[4][1] ); // "rakun"

// ÖDEV s1=10, s2="42", s3=13, s4=15
// 5228, 5525, 7010

// var s1 =10;
// var s2 = "42";
// var s3 = 13;
// var s4 = 15;

// console.log( String(s1+ Number(s2)) + String(s3+s4) );

// ÖDEV var arr1 = ["elma","armut","kiraz",[10, [1,2, ["bir","iki"],3] ,20] ,100, ["sincap", "rakun", "timsah"]]
// ekrana yazdırılacaklar; 100, sincap, 3, iki 
// arr1 = ["elma", "armut", "kiraz", [10, [1, 2, ["bir", "iki"], 3], 20], 100, ["sincap", "rakun", "timsah"]]
// console.log(arr1[4], arr1[5][0], arr1[3][1][2][1]);

// PROJE BOOTSTRAP KURUMSAL SAYFA  03.09.23
// PROJE BOOTSTRAP Netflix  17.09.23



// liste olduğunu belirtmek için köşeli parantez kullanılır.
// liste içerisinde eleman çekebilmek için index numarası kullanılır.
// örnek: arry[index]

// ELEMAN DEĞİŞTİRME => değiştirilcek öğe seçilir = karşılığı yazılır
// let arr1 = ["Ahmet", [1,2,3],"Mehmet","Enes","Sefa","Ayşe"];
// arr1[2] = "Ceyda";
// arr1[1] = "Eren";
// console.log(arr1);

// LİSTEYE EKLEME
// var arr2 = ["orange"]
// arr2.push("blue","green","skyblue", "yellow","gray")
// arr2.push("red")
// // arr2.splice(indexi, silinen, ekleme)
// arr2.splice(2, 0, "black")

// LİSTEDEN ÇIKARMA
// arr2.pop() // en sondaki elemanı çıkartır
// arr2.splice(3,2)
// delete arr2[3] // 
// console.log(arr2);


// LİSTEYİ TERS ÇEVİRME
// var arr3 = [20,50,30,40,10,30]
// arr3.reverse()
// console.log(arr3);


// LİSTEDE INDEX NUMARASI BULMA
// var list3 = [50,20,20,30,40,10,50,30,60,90,40,50,20,10];
// var in60 = list3.indexOf(60)
// var in40 = list3.indexOf(40, 5) // (değer, başlangıç)
// var in50 = list3.indexOf(50,7)
// console.log(in60, in40, in50);


// LİSTE İÇERİSİNDEKİ UZUNLUK length
// const arr1 = [5, 2, 4, 17, 9, 12,1,4,7,9]
// console.log(arr1.length);
// console.log(arr1.lastIndexOf(4));


// İÇ İÇE LİSTELER
// var arr2 = ["elma", "bir", "kalem", [10, 20, ["a", "b"]], "101"]
// var arr1 = ["bir", "iki", arr2, "üç"]
// // console.log(arr1[2][3][2][1]);

// // örn: yukardaki listede 20 değerini 5 ile çarpıp ekrana yazdır (100)
// console.log( arr1[2][3][1] * 5 );
// // örn: yukardaki listede "101" değerini 2 ile çarpıp ekrana yazdır (202)
// console.log( arr1[2][arr2.length-1] * 2 );
// // örn: yukardaki listede "a" değerini ekrana yazdır ("a")
// console.log(arr1[2][3][2][0]);
// // örn: yukardaki listede "a" ve "b" değerlerini kullanarak baba yazdır (baba)
// console.log(arr1[2][3][2][1] + arr1[2][3][2][0] + arr1[2][3][2][1] + arr1[2][3][2][0]);


// örn: boş bir liste tanımlayın boş arr3 içerisine 4 isim girin
// var arr3 = []
// arr3.push("Ahmet","Mehmet","Tuncay","Ayşe")
// console.log(arr3);

// // // örn: arr3 içerisinden son elemanı çıkartır
// arr3.pop()
// console.log(arr3);

// // // örn: arr3 içerisinde 1. indexe sahip elemanı farklı isimle değiştirin
// arr3[1] = "Hayriye";
// console.log(arr3);

// // // örn: arr3'ün 1.indexine 2 isim daha girin
// arr3.splice(1,0,"Tugay", "Fatma")
// console.log(arr3);


// LİSTEDE SIRALAMA sort
// var arr1 = [20,10,40,80,50,5,30]
// arr1.sort(function(a,b){return b-a}) // büyükten küçüğe sıralama
// arr1.sort(function(a,b){return a-b}) // küçükten büyüğe sıralama
// arr1.reverse()
// console.log(arr1);


// LİSTE PARÇALAMA
// var list2 = ["bir","iki","üç","dört","beş","6", "7","8"]

// console.log(list2.slice(2)) // ['üç', 'dört']
// console.log(list2.slice(1, 5)) // ['iki', 'üç', 'dört', 'beş']
// console.log(list2.slice(3, 7)); // ['dört', 'beş', '6', '7']
// console.log(list2.slice(-5, -1)); // ['dört', 'beş', '6', '7']

// örn: [18,5,10,55,2] listesini büyükten küçüğe sıralayın
// var arr5 = [18,5,10,55,2]
// arr5.sort(function(a,b){return b-a})
// console.log(arr5);

// var arr5 = [22,10,5,15,25]
// // örn: yukardaki listeden 2.indexi çıkartın, yerine 20 sayısını ekleyin

// // örn: yukardaki listenin sonuna 2 eleman ekleyin ve ekrana 2.indexten sonrasını yazdırın
// tel:05376925242

// // örn: yukardaki listeyi sort kullanarak küçükten büyüğe sıralayın




// 2 listeyi toplama

// LİSTELERDE ATAMA BAĞLANTI KURMA
// let list1 = [10,20,30,40]
// let list2 = []
// // list2 = list1 // bağ kurma
// list2 = list2.concat(list1) // bağsız atama
// list2.push(50,20)
// console.log(list1, list2);

// var arr1 = [1,2,3,4,5]
// var arr2 = ["bir","iki","üç"]
// arr1 = arr1.concat(arr2) // iki listeyi toplama
// console.log(arr1);


// ===========================================================================================
// OBJE SÖZLÜK
// let obje1 = { "key1":"value1", "key2":"value2" }
// console.log(obje1["key2"]); // value2


// let obje1 = { 0:"value1", 1:"value2" }
// let list1 = ["value1", "value2"]

// // ELEMAN DEĞİŞTİRME
// obje1[1] = "v2";
// list1[1] = "v2";

// console.log(obje1[1], list1[1]);

// let obje2 = {"ad":"Berkay", soyad:"Ülger", "çalıştığı yer":"Neos", 100 : "yüz"}
// // console.log(obje2.ad, obje2.soyad, obje2["çalıştığı yer"], obje2[100]);

// // OBJE ELEMAN DEĞİŞTİRME
// obje2.soyad = "ÜLGER";
// obje2["soyad"] = "ülger";
// // OBJE ELEMAN EKLEME == ELEMAN DEĞİŞTİME
// obje2.tel = "5376925242";
// obje2["meslek"] = "Developer";
// // OBJE ELEMAN SİLME
// delete obje2.tel
// delete obje2["çalıştığı yer"]
// console.log(obje2);


// // Object DATA BASE içerisinde kullanılır ve sözlük yapısıdır.

// var user1 = {
//     "name":"Berkay",
//     "surname":"ÜLGER",
//     "username":"berkay123",
//     "password":"123"
// }
// const user_list = [
//     user1,
//     user2,
//     user3,
//     user4,
// ]



// örn: user içinden kullanıcı adı ve şifreyi ekrana yazdır.
// console.log(user1.surname, user1["password"]);


// PROMPT KULLANICIDAN DEĞER ALMA
// prompt string yapıda tanımlanır toplama yaparken dönüştürmemiz gerekir
// prompt(Kullanıcıya bilgi verilir) = kullanıcının girdiği değer
// var sinav1 = prompt("1. sınav notunuzu giriniz");
// var sinav2 = prompt("2. sınav notunuzu giriniz");

// var ortalama = (Number(sinav1) + Number(sinav2))/2;
// console.log(ortalama);

// örn: s1 ve s2 kullanıcıdan alınsın bu sayıları toplayıp 10 ile çarpın
// var s1 = prompt("1. sayıyı giriniz");
// var s2 = prompt("2. sayıyı giriniz");
// var sonuc = (Number(s1) + Number(s2)) *10;
// console.log(sonuc);


// IF ELSE (KOŞULLAR)
// var s1 = 5;

// if(s1>9){
//     console.log("iki basamaklı veya üstü sayıdır");
// }else{ // if çalışmazsa ben çalışırım
//     console.log("tek basamaklı yada - değerdir");
// }

// var arr2 = ["elma", "bir", "kalem", [10, 20, ["a", "b"]], "101"]
// var arr1 = ["bir", "iki", arr2, "üç"]
// // console.log(arr1[2][3][2][1]);
// // örn: yukardaki listede 20 değerini 5 ile çarpıp ekrana yazdır
// console.log(arr1[2][3][1] * 5);
// // örn: yukardaki listede "101" değerini 2 ile çarpıp ekrana yazdır
// console.log(Number(arr1[2][4]) * 2);
// // örn: yukardaki listede "a" değerini ekrana yazdır
// console.log(arr1[2][3][2][0]);
// // örn: yukardaki listede "a" ve "b" değerlerini kullanarak baba yazdır
// console.log(arr2[3][2][1] + arr2[3][2][0] + arr2[3][2][1] + arr2[3][2][0]);

// ÖDEV: arr6 = ["elma","armut","kiraz","muz"]
// yukardaki elemanın 1. ve 3. elemanlarının yazılarını method
// kullanarak büyük harfe dönüştürün,
// let arr6 = ["elma", "armut", "kiraz", "muz"]
// arr6[0] = arr6[0].toUpperCase()
// arr6[2] = arr6[2].toUpperCase()
// console.log(arr6);

// ========================
// ÖDEV: kullanıcıdan alınan yaş eğerki 18 altıysa, ekrana
// "ehliyet alamazsınız, yaşınız yetmiyor"
// eğerki 18 üstüyse ehliyet sınavına girebilirsiniz
// ========================
// let age = 22;
// if (18>age){
//     console.log("ehliyet almanıza yaşınız yetmiyor!");
// }else{
//     console.log("ehliyet sınavına girebilirsiniz..");
// }

// 18 yaşında ve 45 yaşın altıysa kafeye girebilir değilse giremez
// var age = 25
// ÇÖZÜM 1
// if(18>age){
//     console.log("mekana yaşınız yetmiyor");
// }else if(45<age){
//     console.log("mekana girebilmek için yaşlısınız");
// }else{
//     console.log("mekana hoşgeldiniz");
// }

// ÇÖZÜM 2
// if(age>=18){
//     if(age<=45){
//         console.log("mekana girebilirsin");
//     }else{
//         console.log("mekana girebilmek için yaşlısınız");
//     }
// }else{
//     console.log("yaşın yetmiyor");
// }

// ÇÖZÜM 3
// if( 18<=age && age<=45 ){
//     console.log("mekana girebilir");
// }else{
//     console.log("mekana giremezsin");
// }



// KARŞILAŞTIRMA OPERATÖRLERİ (true yada false 2 sonucu vardır)
/*
== eşitse true
=== herşeyiyle eşit mi true
!= eşit değilse true
< küçüktür true
<= küçük yada eşit true
> büyüktür true
>= büyük yada eşittir true
&& (and) (ve) bağlaç
|| (or) (yada) (veya) bağlaç
*/
// console.log("15 == 15",15 == 15); // TRUE
// console.log("15 == 20",15 == 20); // FALSE
// console.log('15 == "15"',15 == "15"); // TRUE
// console.log('15 === "15"',15 === "15"); // FALSE
// console.log('15 === 15',15 === 15); // TRUE
// console.log('15 != 20: ', 15 != 20); // TRUE
// console.log('20 != 20: ', 20 != 20); // FALSE
// console.log('20<50: ', 20 < 50); // TRUE
// console.log('20 < 10: ', 20 < 10); // FALSE
// console.log('20 < 20: ', 20 < 20); // FALSE
// console.log('20 <= 20: ', 20 <= 20); // TRUE
// console.log('20 > 10: ', 20 > 10); // TRUE
// console.log('20 >= 20: ', 20 >= 20); // TRUE
// console.log('true != 0: ', true != 0); // TRUE
// console.log('false == false', false == false); // TRUE
// console.log('true == 5: ', true == 5); // FALSE


// && (and) (ve) tümünün true olması lazım
// || (or) (veya) bir true çalışması için yeterli
// 18 ile 20 veya 22 yaşındaysa bu kişi indirimli bilet alsın
// var age = 21;
// if(age == 18 || age == 20 || age == 22 ){
//     console.log("indirimli bilet kazandınız");
// }
// var s1 = 35
// console.log( s1 > 18 && 18 < 110 );
// console.log( s1 != 34 || s1 == 18 );




// document.write("asdasd")
// console.log(18 < yas && yas < 55);
// ÖNEMLİ NOTLAR
// if parantez içindeki sonuç true ise çalışır, false ise çalışmaz
// else, if çalışmadığında (false döndürdüğünde) çalışır
// 1 değeri true anlamı taşır, 0 değeri false anlamı taşır
// else if, if koşulumdan false değer alıyorsam "else if" içerisindeki koşuluma bakar eğer bundanda false sonucunu alıyorsam altındaki çalışır
// eğerki if bloğundaki koşullarından birisi true dönüyorsa altındaki koşullara bakmaz
// &&(ve)(and) (true && true) == true operatörü iki karşılaştırmanında true olması durumunda true değer döndürür, çalışır
// && ve bağlacında bir false olsa bile çalışmaz(false değeri döndürür)
// || (yada)(or) (false || false) == false tek bir true değer bile varsa çalışır, true değeri döndürür
// console.log( ((false || false) || true) && true );


// # === öğrencinin ortalaması 50 ve üstüyse geçti altıysa kaldı yazdıran programı yazın
// prompt ortalama, number dönüştür, if 50<ortalama,
// var ortalama =  Number(prompt("öğrencinin ortalamasını giriniz"));
// if (ortalama < 50){
//     console.log("kaldı");
// }else{
//     console.log("geçti");
// }


// # inputta(kullanıcı) alınan sınav notu.öğrenci, 50 altı aldıysa "kaldı" 50 ve üstüyse "iyi" 80 üstüyse "başarılı"
// var note = Number(prompt("öğrenci notu: "))

// if (note < 50){
//     console.log("kaldı");
// }else if(note >= 80){
//     console.log("başarılı");
// }else if(note >= 50){
//     console.log("iyi");
// }


// # === manav = ["elma","armut","kiraz","portakal", "muz"] , kullanıcıdan girilen meyvenin manavda olup olmadığını kontrol edin
// var manav = ["elma", "armut", "kiraz", "portakal", "muz"]
// var meyve = prompt("meyve giriniz")

// if (manav.indexOf(meyve) < 0  ){
//     console.log("manavda aradığın meyve kalmamış");
// }else{
//     console.log("manavda meyve bulunuyor...");
// }


// # === kullanıcıdan girilen değerin 5'e tam bölünüp bölünmediğini söyleyen programı yazın
// let sayi1 = Number(prompt("bir sayı giriniz"))
// if( sayi1%5 == 0 ){
//     console.log("tam bölünür");
// }else{
//     console.log("bölünmez", "kalan",sayi1%5);
// }

// ÖDEV
// # === galeri_marka = ["kia", "bmw", "mercedes", "ford","audi"]
// galari_model = [["rio", sportage], ["m6", "m3"], ["s200", "s180"], ["focus","puma"], ["a5","a6"]]
// kullanıcının aradığı marka ve model galerimizde var mı yokmu, bulduran programı yazınız

// ÖDEV
// # === girilen sayının çift mi tek mi olduğunu bulunuz

// ÖDEV
// # ===  girilen sayı pozitif mi negatifmi

// # === ÖDEV kullanıcıdan girilen isim soyisim baş harfleri büyükse ekrana kaydı tamamla yazsın


// ÖDEV s1 ve s2 değişkenlerim olsun s1 veya s2 nin 100den büyük olduğu durumda ekrana 2 değerin toplamını yazdırın,2sininde küçük olduğu durum için büyük olanı küçük olandan çıkart


// hastane sonuçları
// ÖDEV x sayısı 50 ile 100 arasındaysa yüksek değer, 0 50 arası normal, 100 150 arası çok yüksek değer

// ==========================================


// AND(ve) == && ve OR(veya) == || OPERATORLERİ
// && and operatorü, çalışabilmesi için 2 koşulunda true dönmesi gerekir
// || or operatorü, çalışabilmesi için 1 tane true olması yeterli




// # === sisteme giriş yaptırma kullanıcı adı ve şifre ile
// const data_user = [
//     {"username":"berkay1", "password":"111"},
//     {"username":"ahmet2", "password":"222"},
//     {"username":"hilal3", "password":"333"},
// ] ;
// let username = "berkay1";
// let password = "333";


// if (data_user[0].username === username && data_user[0].password === password){
//     console.log("Giriş Yaptınız..");
// }else{
//     console.log("kullanıcı adı veya şifre yanlış !!!");
// }

// # === kullanıcının girdiği cümle 10 karakterin altındaysa daha uzun bir cümle yazınız diyen programı yazınız

// let text = "nasılsın ...";
// if (text.length<10){
//     console.log("daha uzun bir cümle yazınız..");
// }else{
//     console.log("cümleniz onaylandı");
// }



// kullanıcıdan girilen cümlede kafa kelimesi geçiyorsa *** olarak değiştirilsin, kafa kelimesi geçiyorsa uyarı versin

// let text = "bugün aklım çok katışık";
// // text = text.replace("kafa","***")
// console.log(text.indexOf("kafa"));
// if (text.indexOf("kafa") != -1){
//     console.log("Argo kelime kullanamazsınız !!!");
// }else{
//     console.log(text);
// }

// damsız giremezsin!, kadın sayısı erkek sayısından büyük yada eşit olmalı,
// en fazla kadın sayısının 1 fazlası ise girsin
// let k = 3;
// let e = 5;

// if(k+1 >= e){
//     console.log("içeri girebilirsin");
// }else{
//     console.log("içeri giremezsin !!!");
// }

// Ehliyet sistemi
// eğer yaş 18 den küçükse ehliyet alamazsınız
// eğer yaş 18 ise ehliyet alabilirsiniz
// eğer yaş 19 ve üzeri ise siz hala ehliyet alamadınız mı

// let age = 32;
// if(age<18){
//     console.log("Ehliyet Alamazsın!!!");
// }else if(age==18){
//     console.log("Ehliyet alabilirsin");
// }else{
//     console.log("Siz hala ehliyet almadınız mı?");
// }

/*
ÖDEV
// ARAÇ LASTİK UYARI SİSTEMİ
// 1) kaç lastikte problem var
// 2) problem nedir

// 1 lastik havası indiyse "sürmeye devam edilebilir"
// 1 lastik patlak ise "yavaşla"
// 2 lastik havası indiyse "lastiklerin havasını şişir"
// 2 lastik patlak ise "aracı durdurun"
problem = prompt("problem nedir?")
lastik = Number(prompt("kaç lastikte problem var?"))
*/


// FOR - Döngü
// for(başlangıç ; bitiş ; artış){}
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");

// for(i=0 ; i<10 ; i++){
//     console.log("merhaba");
// }

// for(i=9 ; i>=2 ; i--){
//     console.log(i);
// }

// let list1 = ["elma","armut","kiraz","kavun"]
// console.log(list1[0].toUpperCase());
// console.log(list1[1].toUpperCase());
// console.log(list1[2].toUpperCase());
// console.log(list1[3].toUpperCase());
// for(i=0 ; i<4 ; i++){
// console.log(list1[i].toUpperCase());
// }


// ÖDEV birden 10 a kadar olan sayıları ekrana yazdırın.
// for (i=0 ; i<10 ; i++){
//     console.log(i)
// }

// ÖDEV 1 den 50 ye kadar olan çift sayıları Console’a yazdırınız.
// for (i=1;i<50;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// for (i=0;i<50;i+=2){
//     if(i>=1){
//         console.log(i);
//     }
// }
// i=1 çıktı= ...
// i=2 çıktı= 2
// i=3 çıktı= ...
// i=4 çıktı= 4

// ÖDEV 1 - 100 arası 3 ve 5 e tam bölünen sayılar
// for(i=1;i<100;i++){
//     if(i%3==0){
//         if(i%5==0){
//             console.log(i);
//         }
//     }
// }
// for(i=1;i<100;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
//     }
// }



//  5er 5er artan 20den 100e kadar sayılarım olsun
// bu sayıların toplamını konsola yazdırın
// for(başlangıç, bitiş, artış){}

// var toplam = 0;
// for(i=20;i<100;i+=5){ // 20, 25, 30, 35
//     toplam += i
// }
// console.log(toplam);



// let list1 = ["elma","armut","kiraz","muz", "karpuz","kavun","kayısı"]
// liste içerisindeki elemanların elmaysa ekrana "kilosu 15tl"
// armut 18, kiraz 22, muz 20, yazdırsın
// for(i=0; i<4; i++){
//     if(list1[i] == "elma"){
//         console.log("elma 15tl");
//     } else if (list1[i] == "armut"){
//         console.log(list1[i]+" 18tl");
//     } else if (list1[i] == "kiraz"){
//         console.log(list1[i]+" 22tl");
//     } else if (list1[i] == "muz"){
//         console.log(list1[i]+" 20tl");
//     }
// }

// console.log(list1.length);
// for (i = 0; i < list1.length ; i++){
//     console.log(list1[i]);
// }


//  kullanıcıdan bir cümle alın, bu cümlenin içerisinde
// kaç a harfi varsa o kadar ekrana cümleyi yazdırılsın.
// var text = "buralarda hiç alışveriş marketi yok";
// for(i=0 ; i<text.length ; i++){
//     if(text[i] === "a"){
//         console.log(text);
//     }
// }



// alıştırma === 1. kullanıcı şifre giriş sistemi yapın 3 deneme hakkı bulunsun,
// 2. denemenin sonunda blocklandınız yazdırsın

// const user = {
//     "username":"berkay1",
//     "password":"111",
// }

// let nonlogin = true;
// for(i=0; i<3; i++){ // 0 ---
//     var username = prompt("username");
//     var password = prompt("password");
//     if(username === user.username && password === user.password ){
//         console.log("giriş yaptınız");
//         nonlogin = false;
//         break; // döngüyü sonlandır
//     }else{
//         console.log("kullanıcı adı veya şifre yanlış !!!", "  kalan hak:", 2-i);
//     }

// }

// if(nonlogin){
//     console.log("Sistemden Bloklandınız");
// }



// alıştırma === 50ye kadar olan sayıların 3e veya 7ye bölünenleri ekrana yazdırın
// for (i=0;i<50;i++){
//     if(i%3==0 && i%7==0){
//         console.log(i);
//     }
// }
// for (i=0;i<50;i++){
//     if(i%3==0){
//        if(i%7==0){
//            console.log(i);
//        }
//     }
// }


// for (i=0;i<50;i++){
//     if(i%3==0 || i%7==0){
//         console.log(i);
//     }
// }
// for (i=0;i<50;i++){
//     if(i%3==0){
//         console.log(i);
//     }else if (i % 7 == 0){
//         console.log(i);
//     }
// }

// var products = [
//     {"title":"samsung s22","category":"telefon", "price":20000 },
//     {"title":"iphone s22","category":"telefon", "price":23000 },
//     {"title":"vivo s22","category":"telefon", "price":12000 },
//     {"title":"xiaomi s22","category":"telefon", "price":34000 },
//     {"title":"huwaei s22","category":"telefon", "price":11000 },
//     {"title":"nokia s22","category":"telefon", "price":9000 },
//     { "title": "A TV", "category":"elektronik", "price":55000 },
//     { "title": "B Kahve Makines", "category":"elektronik", "price":22000 },
//     {"title":"C Saç kurutma","category":"elektronik", "price":1000 },
//     {"title":"Nike Ayakkabı","category":"giyim", "price":2000 },
// ]
// // DETAY SAYFASI
// // for(başlangıç, bitiş, artış), i değerini ürünleri getirmek için kullan 
// for(i=0; i<products.length; i++){
//     console.log("Title: ",products[i].title);
//     console.log("Category: ",products[i].category);
//     console.log("Price: ",products[i].price);
//     console.log("==========",);
// }




// ÖDEV === "patatesli ekmek" yazısında kaç tane e harfi olduğunu bulan kodu yazınız
// var text = "patatesli ekmek";
// var e_sayac = 0;
// for(i=0; i<text.length; i++){
//     if (text[i] === "e"){
//         e_sayac += 1;
//     }
// }
// console.log(e_sayac);


// ÖDEV === 3 deneme hakkı olan kullanıcı 
// text="mermer merve mermer merve mermer merve"
// // yazmaya çalışsın eğer doğruysa helal olsun yazdıran kodu yazın

// for(i=0; i<3; i++){
//     if(text == prompt("3 kere mermer merve yaz")){
//         console.log("helal olsun!!");
//         break;
//     }else{
//         console.log("yanlış yazdınız..");
//     }
// }


// ÖDEV === kullanıcıdan alınan sayıyı, 0dan o sayıya kadar ekrana yazdırın, 
// sayı 20nin üstündeyse "sayı yüksek" yazzarak döngüyü yazdırmasın,
// var bitis = Number(prompt("bitiş değeri"))
// if(bitis<=20){
//     for (i=0; i<bitis ; i++){
//         console.log(i);
//     }
// }else{
//     console.log("Sayı Çok Yüksek");
// }

// ÖDEV
// 4 deneme hakkı olan ve her serferinde şifre sorulur banka sistemine 
// giriş yaptıktan sonra para mı çekicek yoksa para mı yatırıcak, 
// yatırıcaksa ana paraya eklenir. anapara=50000
// var anapara = 50000;
// var banka_data = {"password":"123"};
// for(hak=3; hak>=0; hak--){
//     var password = prompt("şifre");
//     if(banka_data.password === password){
//         console.log("Sisteme Giriş Yaptınız");
//         var sorgu = prompt("para çek(1) para yatır(2)");
//         if(sorgu == "1"){
//             var miktar = Number(prompt("ne kadar çekiceksin"))
//             anapara -= miktar;
//         }else if(sorgu == "2"){
//             var miktar = Number(prompt("ne kadar yatırıcaksın"))
//             anapara += miktar;
//         }
//         console.log("kalan bakiye:",anapara);
//         break
//     }else{
//         console.log("şifreniz yanlış!!!","hak:", hak);
//     }
// }


// ÖDEV 5 kişi listemiz olsun, notları olucak, devamsızlık sayıları 
// olucak, notu 50 üstüyse geçsin, devamsızlığı 10 ve üstü olanlar
//  kalsın, devamsızlığı en fazla 3 olana teşekkür belgesi,
// notu 100 bile olsa 10 devamsızlık yapan kalıyor.
// var ogrenci = [
//     {"ad":"Ali", "not":55, "devam":12},
//     {"ad":"Ayşe", "not":45, "devam":7},
//     {"ad":"Mehmet", "not":75, "devam":5},
//     {"ad":"Kazım", "not":95, "devam":0},
//     {"ad":"Hayriye", "not":15, "devam":15},
// ]
// çıktı: ali 12 devamsızlığını bulunduğu için kaldınız
// çıktı: ayşe 3 devamsızlık ve notunuz 70 olduğundan teşekkür belgesi aldınız
// 10devamın üstünde veya notu 50nin altındaysa kaldı

// for(i=0; i<ogrenci.length ; i++){
//     if(ogrenci[i].devam>=10 || ogrenci[i].not < 50){
//         console.log(ogrenci[i].ad,"dersten kaldınız sınıf tekrarı!!", "not:",ogrenci[i].not,"devamsızlık:",ogrenci[i].devam );
//     }else{
//         if(ogrenci[i].devam <= 3){
//             console.log(ogrenci[i].ad, ogrenci[i].devam, "devamsızlık ve notunuz", ogrenci[i].not,"olduğundan teşekkür belgesi aldınız"  );
//         }else{
//             console.log(ogrenci[i].ad, ogrenci[i].devam, "devamsızlık ve notunuz", ogrenci[i].not, "sınıfı geçtiniz....");
//         }
//     }
// }



// break, continue anlatılacak
// === while
// çalışma mantığı: if ve forun karışımıdır. while koşul yazılır(true yada false) döngü dönmeye başlar
// while(false){
//     console.log("merhaba");
// }

// var i = 0; // başlangıç
// while(i<10){ // bitiş
//     console.log(i);
//     i++ // artış
// }

// var s1 = 5;
// while(false == 0){
//     if (s1>=30){
//         break; // döngüyü durdurur yada kapatır
//     }
//     console.log("çalışır mı?");
//     s1++;
// }

// var i = 0;
// var end = 1
// while(true == end){
//     if(i>9){
//         end = 0;
//     }
//     console.log(i);
//     i++;
// }

// var bool1 = true;
// var i = 0;
// while(bool1){
//     if(i>9){
//         bool1 = false
//     }
//     console.log(i);
//     i++;
// }


// 0dan 20ye kadar çift sayıları ekrana yazdırın

// var i = 0;
// while(i<20){
//     if(i%2 == 0){
//         console.log(i);
//     }
//     i++;
// }



// 5 kişi listesini sırasıyla ekrana yazdırın
// var listname = ["Ahmet", "Mehmet", "Ali", "Ayşe", "Veli"]
// var i = 0;
// while(i<listname.length){
//     console.log(listname[i]);
//     i++;
// }

// firmanın büyüklüğünü hesaplatın, 3 şirket isimleri olsun, işçi sayıları olsun, işçi sayısı 100 üstüyse "... büyük firmadır" olarak yazdırın altındaysa küçük firma
// let firma = [
//     {"name":"A", "calisan":105 },
//     {"name":"B", "calisan":125 },
//     {"name":"C", "calisan":15 },
// ]

// let i = 0;
// while (i<firma.length){
//     if (firma[i].calisan>=100){
//         console.log(firma[i].name,"Büyük Firmadır");
//     }else{
//         console.log(firma[i].name,"Küçük Firmadır");
//     }
//     i++;
// }





//ÖDEV// meyve listesi oluştur, kullanıcının istediği meyve var mı yok mu kontrol edin. eğer varsa ekrana markette bulunuyor, yoksa kalmamış
// let listmeyve = ["elma", "armut","muz","kivi","kiraz","şeftali","kavun"];
// var search = prompt("hangi meyveyi arıyorsunuz?");

// var i = 0;
// let nonsearch = true
// while (i<listmeyve.length){
//     if (listmeyve[i] == search.toLowerCase()){
//         console.log(search, "matkette bulunuyor");
//         nonsearch = false
//     }
//     i++;
// }
// if(nonsearch){
//     console.log(search,"markette bulunmuyor");
// }

//ÖDEV// liste içerisinde kırtasiye malzemeleri olsun sistemden ürün almak isteyen bir kişi sisteme alacağı ürünü yazar ve sistemde varsa adı yazsın yoksa bulunmuyor yazsın. 
// 2.kısım fiyat listeleride yani sepet=[2 kalem,2 silgi,cetvel] alarak fiyatını hesaplatın.

// ürün listesi, fiyat listesi,
// kullanıcıdan gelen: alacagı ürün,
// 2.kısım bakiye, kullanıcı alışverişi sonlandırsın,

// DATABASE
// let products = [
//     {"id":1, title:"kalem", price:25}, // == basket[i]
//     {"id":2, title:"silgi", price:15},
//     {"id":3, title:"cetvel", price:55},
//     {"id":4, title:"kitap", price:45},
//     {"id":5, title:"pergel", price:60},
// ]
// let basket = [];
// let total = 0;

// while (true){
//     let search = prompt("kırtasiyeden ne alıcaksınız? (alışverişi bitirmek için exit yazınız)");
//     let nonsearch = true;

//     if(search == "exit"){
//         console.log(basket);
//         for(i=0; i<basket.length; i++){
//             total += basket[i].price;
//         }
//         console.log("ödemeniz gereken toplam", total,"₺");
//         break;
//     }

//     for(i=0; i<products.length; i++){
//         if (products[i].title == search.toLowerCase()){
//             console.log(search,"fiyatı",products[i].price);
//             nonsearch = false;
//             basket.push(products[i])
//         }
    
//     }
//     if(nonsearch){
//         console.log("kırtasiyemizde",search, "bulunmuyor...");
//     }
    
// }


// [kalem, silgi, cetvel, kitap, pergel]
// [25, 15, 55, 45, 60]

// prompt ne alıcaksın: kitap, silgi
// sepet = [kitap,silgi, silgi, pergel]
// prompt alışverişi bitirmek için 0 yazabilirsin 





// === function
// belirli kodları içerisinde tutar ve çağrıldığında çalışırlar

// function reCode(){ // eğerki fonksiyon çağrılmıyorsa uykudadır.
//     for(i=0;i<3;i++){
//         if(i==1){
//             console.log("bir");
//         }else{
//             console.log(i);
//         }
//     }
// }

// var x = 10;
// var y = 20;
// function Toplama(){
//     var z = 30
//     console.log(x+y);
// }

// Toplama()
// console.log(x,y);

// function Toplam(x,y){ // fonksiyona dışardan gelen değerleri parantezin içinde yazarız 
//     console.log(x+y);
// }

// Toplam(30,50)
// Toplam(20,10)
// Toplam(225,110)

// function forRange(start, end, step){
//     for(var i=start; i<end; i += step){
//         console.log(i);
//     }
// }
// forRange(5,15,2)
// forRange(10,100,10)


// function Ortalama(vize,final) { 
//     let ortalama = (vize*0.4) + (final*0.6);
//     return ortalama // geriçağırma yada geridöndürme (fonksiyonun karşılığıdır)
// }

// let ahmetortalama = Ortalama(30, 80);
// console.log(ahmetortalama);
// if (50 <= ahmetortalama){
//     console.log("sınavı geçtiniz");
// }else{
//     console.log("sınavdan kaldınız");
// }

// console.log(Ortalama(10,80));

// FORUN FONKSİYONU YAPILCAK
// function forRange(start,end,step){
//     return 
// }
// for (1,4,6){
// }

// ÖDEV
// sınıftaki öğrencilerin  ortalamadan geçip geçmediği durumuu hesaplayın
// fonksiyon
// let data_student = [
//     {"fname":"Ayşe","sinifadi":"12A",quiz:[40,67,39,53]},
//     {"fname":"Ahmet",quiz:[35,55,70,99]},
//     {"fname":"Mehmet",quiz:[88,2,88,2]},
//     {"fname":"Fatmanur",quiz:[22,22, 66,15]},
// ]
// let data_student2 = [
//     {"fname":"a","sinifadi":"12A",quiz:[40,67,39,53]},
//     {"fname":"b",quiz:[35,55,70,99]},
//     {"fname":"c",quiz:[88,2,88,2]},
//     {"fname":"d",quiz:[22,22, 66,15]},
// ]


// quizleri topla 3e böl
// console.log(sinif[0].quiz3);
// console.log(sinif[0]["quiz 4"]);

// 2. data için
// const Ortalama = function (sinif){
//     for(i=0; i<sinif.length; i++){
//         var toplam = 0;
//         for(j=0; j<sinif[i].quiz.length; j++){ // quizleri toplamak
//             toplam += sinif[i]["quiz"][j]
//         }
//         var ortalama = Math.round(toplam / sinif[i]["quiz"].length)
//         if (ortalama >= 50) {
//             console.log(sinif[i]["fname"], ortalama,"ortalamayla dersten geçtiniz");
//         }else{
//             console.log(sinif[i]["fname"], ortalama,"ortalamayla dersten kaldınız!!");
//         }
//     }
// }

// Ortalama(data_student)
// Ortalama(data_student2)


// 1. data için
// function ortalamaSinif(){
//     for(i=0; i<sinif.length; i++){
//         var ortalama = (sinif[i].quiz1 + sinif[i].quiz2 + sinif[i].quiz3)/3;
//         ortalama = Math.round(ortalama)
//         if (ortalama >= 50){
//             console.log(sinif[i]["fname"], ortalama,"ortalamayla dersten geçtiniz");
//         }else{
//             console.log(sinif[i]["fname"], ortalama,"ortalamayla dersten kaldınız!!");
//         }
//     }
// }


// 2 değişkeni toplasın , sonra çarpımından çıkarsın
// const myF1 = function(s1,s2){
//     var toplam = s1+s2;
//     var carpim = s1*s2;
//     var sonuc = carpim - toplam;
//     console.log(sonuc); 
// }

// myF1(10,6)
// myF1(50,2)
// myF1(6,16)


// Function yazıışları
// 1)
// function myF1(){}
// // 2)
// const myF2 = function(){}
// // 3)
// const myF3 = ()=>{}


// ÖDEV
// ehliyet yaşı sorgusu yaşı yeterliyse sınava girebilir, sınavı geçtiyse ehliyeti alabilir

// const ehliyetSonuc = (age)=>{
//     if( age>=18){
//         let quiz = prompt("sınav notunuzu giriniz...")
//         if(quiz >= 70){
//             return "Ehliyet Alabilir.."
//         }else{
//             return "tekrar sınava giriniz"
//         }
//     }else{
//         return "yaşınız yetersiz"
//     }
// }

// console.log('ehliyetSonuc(35): ', ehliyetSonuc(35));
// ehliyetSonuc(25)
// ehliyetSonuc(15)
// ehliyetSonuc(5)



// FOR IN, FOR OF, FOREACH, MAP

// var list1 = ["elma", "armut", "kiraz"]
// console.log("=== normal ===");
// for(i=0; i<list1.length; i++){
//     console.log(list1[i]);
// }

// console.log("=== forin ===");
// for( i in list1){ // i içerisin index numaraları döndürür
//     console.log(list1[i]);
// }
// console.log("=== forof ===");
// for( i of list1){ // i içerisinde elemanları döndürür
//     console.log(i);
// }

// // (i)=>{} arrow function
// console.log("=== foreach ==="); // arr.foreach((eleman, index, liste)=>{...})
// list1.forEach((e,i,arr)=>{ // i içerisinde elemanları döndürür
//     console.log(e,i,arr);
// })

// console.log("=== map ==="); // return ile çalışan isteyen bir fonksiyon
// list1.map((e,i,arr)=>{
//     console.log(e,i,arr);
// })


// ÖDEV kullanıcı girişi listesi tanımlansın tanımlanan kullanıcılar foreach ile dönülücek ve giriş yaptırtılıcak
// var users = [
//     {
//         username: "berkay111",
//         password: "111",
//     },
//     {
//         username: "ali222",
//         password: "222",
//     },
//     {
//         username: "veli333",
//         password: "333",
//     },
// ]

// let username = prompt("kullanıcı adını giriniz");
// let password = prompt("Şifreyi giriniz");
// let warning = true;
// users.forEach((e)=>{
//     if(e.username == username && e.password == password){
//         console.log("hoşgeldiniz...");
//         warning = false;
//     }
// })

// if (warning){
//     console.log("kullanıcı adı veya şifre yanlış!!");
// }

// === DOM ===

// === (document) Seçiciler

// html'de istediğimiz etiketi seçicez
// ve ona özellikler vericez

// let tag1 = document.getElementsByTagName("h1")
// console.log(tag1[0]);
// tag1[0].innerText = "merhaba dom";

// let tag2 = document.querySelector("div")
// console.log(tag2);
// tag2.innerText = "merhaba querySelector";

// let cl1 = document.querySelector(".text")
// console.log(cl1);
// cl1.innerText = "merhaba tag, class ve id seçici";

// let id1 = document.querySelector("#text")
// console.log(id1);
// id1.innerText = "hangisi daha baskın";

// let id2 = document.getElementById("p1");
// console.log(id2);
// id2.innerHTML += ": id seçici";

// let card = document.querySelector(".card");
// console.log(card);
// card.innerHTML = "diğerleri neden gelmedi?";

// === Çoklu seçiciler
// let cards = document.querySelectorAll(".card")
// console.log(cards);
// cards[3].innerHTML = "bu şekilde özellik neden veremiyoruz?";

// for(i=0; i<cards.length; i++){
//     console.log(cards[i]);
//     cards[i].innerHTML = "değişiklik";
// }

// cards.forEach((e,i)=>{
//     if(i%2 == 0){
//         e.innerHTML = "cardların içlerindeki tüm yazıyı değiştirdik"
//     }
// })

// === innerText ve innerHTML farkı
// let div1 = document.querySelector(".div1")
// let div2 = document.querySelector(".div2")

// div1.innerText = "<b>div1</b>"; // yalnızca metine bakar
// div2.innerHTML = "<b style='color:red;url(\"asd\")'>div2</b>"; // HTML hem metine hemde HTML öğesi olup olmadığına bakar
// console.log("merh\naba");

// 3 tane ürünüm olsun bu ürünlerin ilki ve üçüncünün fiyatlarına %50 zam geldi

// let price = document.querySelectorAll(".price")
// console.log(price);
// let zam = 20;
// price.forEach((e,i)=>{
//     if(i%2 == 0){
//         e.innerText = Number(e.innerText) * ((zam/100)+1);
        
//     }
// })



// ÖDEV kullanıcı adı ve şifresi olan div yapılarında şifreyi değiştirin
// prompt tan hangi kulanıcı şifre değiştiricek hangisiyse onun şifresini propmpt ile değiştirin

// let users = document.querySelectorAll(".user h5")
// let userspas = document.querySelectorAll(".user div")
// let login = false

// function loginUser(){
//     let username = prompt("kullanıcı adı")
//     let password = prompt("password")
//     for( i=0; i<users.length; i++ ){
//         if(users[i].innerText===username && userspas[i].innerText===password){
//             alert("Hoş geldiniz...")
//             login = true
//         }
//     }
//     if(login == false){
//         alert("kullanıcı adı veya şifre yanlış!!");
//         let sorgu = prompt("şifreyi unuttun mu?(e,h)")
//         if(sorgu === "e"){
//             username = prompt("şifresini değiştirmek istediğin kullanıcı adını giriniz...")
//             for(i=0; i<users.length; i++){
//                 if(users[i].innerText === username){
//                     userspas[i].innerText = prompt("Yeni Şifre")
//                     return loginUser()
//                 }
//             }
//         }
//     }
// }
// loginUser()



// SEÇİCİLER

// let box1 = document.querySelector(".box1");
// let div1 = document.querySelector("#div1");
// let divid = document.getElementById('divid');

// box1.innerHTML = "merhaba style DOM";
// box1.style.background = "red";

// div1.innerHTML = "merhaba id queryselectt";
// div1.style.background = "green";
// div1.style.color = "#fff"

// divid.innerText = "merhaba getElementById seçici";
// divid.style.background = "blue";

// divid.innerHTML = "<b class='bb'>neden style <i class='cc'>www</i> getelementbyid'de öneri olarak geliyor</b>";

// let bb = document.querySelector(".bb");
// bb.style.background = "#000";
// bb.innerHTML += "<div class='aa'>aaaa</div>";

// box1 içerisine ne güzel çocuk sesi gelmiyor, yazalım.
// box1 style özellikleri verin yazı rengi mor olsun, 
// box1 içerisine bir div1 clasını ekleyin önceki verdiğiniz özellikler gitmesin  
// içerdeki yazıyı tekrar değiştirin = merhaba class

// let boxx1 = document.querySelector(".boxx1");
// boxx1.innerText = "Ne güzel çocuk sesi gelmiyor!";
// boxx1.style.color = "purple";
// boxx1.innerHTML += "<div class='div1'></div>"
// document.querySelector(".div1").innerHTML="merhaba div1 class'ı"


// let box2 = document.getElementById("box2");
// box2.style.width = "200px";
// box2.style.height = "200px";
// box2.style.background = "yellow";
// box2.style.border = "2px solid black";
// box2.innerHTML = "<p>lorem</p>";
// box2.style.display = "flex";
// box2.style.alignItems = "center";
// box2.style.justifyContent = "center";


// // alıştırma 1) yeni bir div açın bu dive 150px genişlik ve 300px uzunluk verilecek arkaplan mavi, margin 20px, 2) animasyon verin

// let div1 = document.getElementById("div1")
// // console.log(div1);
// div1.style.width = "150px";
// div1.style.height = "300px";
// div1.style.background = "blue";
// div1.style.margin = "20px";
// div1.style.transition = "1s"

// Click
//  1) etiket içerisine onclick ve fonksiyon gönderiyoruz ve ardından her tıkladığımızda bu fonksiyon çalışıcaktır. 
// const Animate = ()=>{
//     if (div1.style.height == "300px"){
//         div1.style.height = "150px";
//     }else{
//         div1.style.height = "300px";
//     } 
// }
// const Animate = ()=>{
//     if (div1.style.height == "300px" && div1.style.background != "red"){
//         div1.style.height = "150px";
//     } else if (div1.style.height == "150px" && div1.style.width != "300px"){
//         div1.style.width = "300px";
//         div1.style.background = "red";
//     } else if (div1.style.width == "300px" && div1.style.height != "300px"){
//         div1.style.height = "300px";
//     } else{
//         div1.style.height = "300px";
//         div1.style.width = "150px";
//         div1.style.background = "blue";
//     }
// }

// 2) click toggle işlemi için tru false kullanımı
// div1.style.height = "40px";
// togglebool = true;
// const Animate = function(){
//     if (togglebool){
//         div1.style.height = "200px"
//         // togglebool = false;
//     }else{
//         div1.style.height = "40px"
//         // togglebool = true;
//     }
//     togglebool = !togglebool;
// }

// 3) class tanımlı olan bir değeri atayıp toggle methodu kullanılır

// const Animate = ()=>{
//     div1.classList.toggle("divtoggle")
// }

// const Animate = ()=>{
//     if (div1.classList.value.indexOf("divtoggle") == -1 ){
//         div1.classList.add("divtoggle")
//     }else{
//         div1.classList.remove("divtoggle")
//     }
//     console.log();
// }

// function Animate(){
//     if (div1.className != "divtoggle"){
//         div1.className = "divtoggle";
//     }else{
//         div1.className = "";
//     }
//     console.log('div1.className: ', div1.className);
// }


// alıştırma = bir box oluşturun kutuya tıklandığında sağa hareket etsin kutuya tekrar tıklandığında sola hareket etsin


// let div2 = document.getElementById("div2")
// div2.style.width = "100px";
// div2.style.height = "100px";
// div2.style.background = "red";
// div2.style.border = "2px solid black";
// div2.style.transition = "1s"
// let bool = true
// function Move(){
//     if(bool){
//         div2.style.marginLeft = "400px";
//     }else{
//         div2.style.marginLeft = "0px";
//     }
//     bool = !bool
//     // div2.classList.toggle("leftmove")
// }

// let menudiv = document.querySelector(".menudiv");
// function Menu(){
//     menudiv.style.right = "0"
// }
// function MenuClose(){
//     menudiv.style.right = "-200px"
// }

// function Menu(){
//     menudiv.classList.toggle("menuclose")
// }

// let menudiv = document.querySelector(".menudiv");
// let menu = document.getElementById("menu")
// let menuclose = document.getElementById("menuclose")

// menu.addEventListener("click", ()=>{
//     menudiv.style.right = "0";
// })

// menuclose.addEventListener("dblclick", ()=>{
//     menudiv.style.right = "-200px";
// })

// let dropdownmy = document.querySelectorAll(".dropdownmy")
// let dropdownmenu = document.querySelectorAll(".dropdownmenu")

// ====================
// Çoklu Elementlere işlem yaptırırken bekleme olayı olmadığından
// asenkron olduğundan indexi son değer verir
// for(inn=0;inn<dropdownmy.length; inn++){ 
//     dropdownmy[inn].addEventListener("click", ()=>{
//         dropdownmenu[inn]
//         console.log('dropdownmenu[i]: ', inn);
//     })
// }
// ====================

// dropdownmy.forEach((e,inn)=>{
//     e.addEventListener("click", () => {
//         e.children[1].classList.toggle("show")
//         // dropdownmenu[inn].classList.toggle("show")
//     })
// })




// passwordDiv.setAttribute("disabled", "")
// passwordDiv.removeAttribute("disabled")
// var clicka = document.getElementById("clicka")
// // clicka.setAttribute("href", "/index/")
// === ATTRIBUTE ===
// let mybut = document.getElementById("mybut");
// mybut.setAttribute("disabled","") // Attribute Ekleme
// mybut.removeAttribute("disabled") // Attribute Çıkarma
// mybut.getAttribute("type") // value değeri getirir

// if (mybut.getAttribute("type") == "button"){
//     mybut.setAttribute("disabled","")
// }else if (mybut.getAttribute("type") == "submit"){
//     mybut.setAttribute("name", "sub")
// }
// if (mybut.getAttribute("class") == "bb"){
//     mybut.removeAttribute("disabled")
// }


// let mydiv = document.getElementById("mydiv");
// mydiv.firstElementChild.style.color = "red";
// mydiv.lastElementChild.style.background = "blue";

// for(e of mydiv.children ){
//     e.style.width = "100px";
//     e.style.height = "100px";
//     e.style.border = "2px solid #222";
// }

// for(i=0; i<mydiv.children.length; i++){
//     mydiv.children[i]
//     if(i%2 == 1){
//         mydiv.children[i].style.background = "red"
//         mydiv.children[i].style.width = "50px";
//         mydiv.children[i].style.height = "50px";
//     }
// }

// Attribute
// let sozles = document.getElementById("sozles");
// let sozles2 = document.getElementById("sozles2");
// let login = document.getElementById("login");

// const kvkK = ()=>{
//     sozles.removeAttribute("disabled")
//     sozles.setAttribute("checked","")
//     // sozles2'nin sahip olduğu kapsayıcıyı seçip classını kaldırıcaz
//     console.log(sozles2.parentElement); // ebebein seçici, kapsayıcıyı seçer
//     sozles2.parentElement.setAttribute("class","")
// }
// const select2Change = (e)=>{
//     console.log(login.hasAttribute("disabled"));
//     if (login.hasAttribute("disabled")){
//         login.style.color = "green";
//         login.innerText = "Giriş Yap";
//     }else{
//         login.innerText = "Giriş Yapamazsın";
//         login.style.color = "red";  
//     }
//     if (e.checked){
//         login.removeAttribute("disabled")
//     }else{
//         login.setAttribute("disabled","")
//     } 
// }

// let database = {
//     "username":"berkay1",
//     "password":"1111",
// }

// let username = document.getElementById("username")
// let password = document.getElementById("password")

// const submitButton = (e)=>{
//     console.log(username.value, password);
//     if(database.username == username.value && database.password == password.value){
//         alert("Girişiniz Başarılı..")
//     }else{
//         alert("Kullanıcı adı veya şifre yanlış")
//     }
// }

// let users = [
//     {username:"ahmet1", password:"111", gizli:"kedi"},
//     {username:"ayse2", password:"222", gizli:"köpek"},
//     {username:"hayriye3", password:"333", gizli:"kartal"},
//     {username:"mehmet4", password:"444", gizli:"aslan"},
//     {username:"fatma5", password:"555", gizli:"yılan"},
// ]

// const myChange = (e)=>{
//     // for(i=0; i<users.length; i++){
//     //     if(users[i].username === e.value){
//     //         console.log("username doğru");
//     //     }
//     // }
// }

// const myInput = (e)=>{
//     let login = false;
//     for(i=0; i<users.length; i++){
//         if(users[i].username === e.value){
//             e.classList.add("is-valid")
//             e.classList.remove("is-invalid")
//             login = true;
//         }
//     }
//     if(!login){
//         e.classList.add("is-invalid")
//     }
// }

// const mySubmit = (event)=>{
//     event.preventDefault(); // sayfanın yenilenmesini engeller 
//     let messages = document.getElementById("messages");
//     let hata_con = document.getElementById("hata-con");
//     let login = false;
//     for(i=0; i<users.length; i++){
//         if (users[i].username === event.target.username.value && users[i].password === event.target.password.value){
//             login = true;
//             messages.innerText = "Girişiniz Başarılı...";
//             messages.className = "text-success";
//             hata_con.innerHTML = `<div class="hata">
//                 <div class="hata-text text-success">Girişiniz Başarılı...</div>
//                 <div class="hata-time"></div>
//             </div>`
//             window.location.assign("anasayfa.html")
//         }
//     }
//     if(!login){ // ! tersii al
//         messages.innerText = "Kullanıcı adı veya şifre yanlış!!";
//         messages.className = "text-danger";
//         hata_con.innerHTML = `<div class="hata">
//             <div class="hata-text" style="color:darkred;">Kullanıcı adı veya şifre yanlış!</div>
//             <div class="hata-time"></div>
//         </div>`
//     }
    
//     // for(i=0; i<event.target.length; i++){
//     //     console.log(event.target[i].value);
//     // }
//     // console.log(event.target.username.value);
// }


// let divcon = document.getElementById("div-con");
// let div1_list = document.querySelectorAll(".div1")
// let dv2 = document.getElementById("dv2")
// // console.log(divcon, div1_list, dv2);
// console.log(divcon.children); // liste olarak gelir

// console.log(divcon.firstElementChild); // ilkini verir
// console.log(divcon.children[1]); // seçili olanı verir
// console.log(divcon.lastElementChild); // sonuncuyu verir

// console.log(div1_list[1].previousElementSibling); // öncekini verir
// console.log(div1_list[1]); // seçili olanı verir
// console.log(div1_list[1].nextElementSibling); // sonraki elementi verir
// console.log("-----");
// console.log(dv2.parentElement.parentElement.style.display = "block");

// let slider_body = document.querySelector(".slider-body");
// let transx = 0;
// let sliderwidth = 160;
// let showbox = 3;
// slider_body.parentElement.style.width = (sliderwidth * showbox)+"px"; // slider görüntülenen element sayısı
// let bodyleftcont = slider_body.childElementCount - showbox;
// let bodyleftif = bodyleftcont * sliderwidth;


// const btnLeft =()=>{
//     if (transx < 0){
//         transx += sliderwidth
//         slider_body.style.transform = "translateX("+  +transx  +"px)"
//     }
// }

// const btnRight =()=>{
//     if (transx > -bodyleftif){
//         transx -= sliderwidth
//         slider_body.style.transform = "translateX("+  transx  +"px)"
//     }
//     console.log(transx, bodyleftif);
// }


// ==================================================================
// ÖDEV slider ile image veya cartların butona tıklanarak hareket etmesi
// preEventDefault(), nextElementSibling, previousElementSibling,parentElement, onchange, oninput, window.location, onsubmit,target

// eventlere bakılcak
// create element



// let mainjs = document.getElementById("mainjs");
// let div1 = document.createElement("div");
// mainjs.appendChild(div1);
// div1.style.width = "150px";
// div1.style.height = "150px";
// div1.style.background = "black";

// alıştırma === kutu oluşturun width değeri 300px olsun
// buttonuna basıldığında width değeri 50% ye düşsün
// let mainjs2 = document.getElementById("mainjs2");
// let div2 = document.createElement("div");
// let div2wid = 300;
// div2.style.width = div2wid+"px";
// div2.style.height = "150px";
// div2.style.background = "purple";
// div2.style.transition = "1s";
// div2.style.border = "4px solid black";
// mainjs2.appendChild(div2)

// const kutuK = ()=>{
//     div2wid -= 20;
//     div2.style.width = (div2wid) +"px";
// }

// const kutuB = ()=>{
//     div2wid += 20;
//     div2.style.width = (div2wid) +"px";
// }

// alıştırma === bir a etiketi oluşturun, oluşturduğunuz a etiketine
// text ve link gönderin,

// let mainjs3 = document.getElementById("mainjs3");
// let a1 = document.createElement("a");
// mainjs3.appendChild(a1);
// a1.innerText = "github";
// a1.href = "https://github.com/ulgerb/proje03ocak";

// alıştırma === sağ sol butonları tasarlayın, butonlarla bir hayvan iconunu
// sağa sola yukarı aşağı hareket ettirin.
// (html içerisine svg image gönderin, position: absolute olup left top verilebilir )

// let bird = document.getElementById("bird");
// let movex = 20;
// let movey = 120;

// const rightBird = ()=>{
//     bird.style.transform = "rotateY(180deg)";
//     movex += 20
//     bird.style.left = movex+"px";
// }
// const leftBird = ()=>{
//     bird.style.transform = "rotateY(0deg)";
//     movex -= 20
//     bird.style.left = movex+"px";
// }
// const upBird = ()=>{
//     movey -= 20
//     bird.style.top = movey+"px";
// }
// const downBird = ()=>{
//     movey += 20
//     bird.style.top = movey+"px";
// }

// let movex = 20;
// let movey = 120;
// let speed = 50;

// window.addEventListener("keypress", (event)=>{
//     let keyp = event.key;
//     if(keyp === "a"){
//         movex -= speed; // 0 -20 -40 -60 -80
//         bird.style.left = movex+"px"; 
//         bird.style.transform = "rotateY(0deg)";
//     }else if (keyp === "d"){
//         movex += speed;
//         bird.style.left = movex + "px";
//         bird.style.transform = "rotateY(180deg)";
//     }else if(keyp === "w"){
//         movey -= speed;
//         bird.style.top = movey + "px"; 
//     }else if(keyp === "s"){
//         movey += speed;
//         bird.style.top =movey+"px";    }
// })


// let myelement = document.querySelector(".myscrollanimate");


// window.addEventListener("scroll", (event)=>{
//     // console.log(document.documentElement.scrollTop);
//     let sy = window.scrollY; 
//     if (sy >= 300){
//         myelement.style.transform = "translateY(0px)"
//     }else{
//         myelement.style.transform = "translateY(120px)"
//     }
// })

// let div1 = document.createElement("div");
// div1.style.height = "20px";
// div1.style.width = "20px";
// div1.style.background = "darkred";
// div1.style.position ="absolute";
// div1.style.top ="0px";
// div1.style.left = "0px";
// div1.style.transition = ".4s";
// document.body.appendChild(div1);

// window.addEventListener("mousemove", (event)=>{
//     let mouseX = event.pageX;
//     let mouseY = event.pageY;
//     document.getElementById("title").innerText = "X: "+mouseX+" - "+"Y: "+mouseY; 
//     div1.style.transform = `translate(${mouseX -30}px, ${mouseY+20}px)`;
// })

// let boxt = false;
// window.addEventListener("transitionend", (event)=>{
//     boxt = true;
//     div1.style.background = "green";
//     // div1.style.transform = div1.style.transform + " rotate(400deg)";
// })

// form target içerisindeki tüm inputları liste olarak al ??
// ÖDEV === bir form oluşturun oluşturulan formdaki verileri html içerisine yazdır.
// let form5 = document.getElementById("form5");
// const Form5 = (event)=>{
//     form5.innerText = event.target.fname.value + event.target.lname.value + event.target.city.value
//     event.preventDefault();
// }

// ÖDEV === input içerisindeki girilen rengi anlık olarak değiştirin.
// const inputColor = (e)=>{
//     e.style.background = e.value;
// }

// ÖDEV === 20px,20px kırmızı kutu oluşturun, kutuya zıplama işlevi kazandırın,
// ve bu kutu hareket etsin, 
// ZOR ÖDEV kutu oyunu tasarlayın engellerden zıplayarak varış noktasına ulaşmaya çalısın
// let box1 = document.getElementById("box1");
// let mainbox = document.getElementById("mainbox");
// mainbox.style.width = "100%";
// mainbox.style.height = "70vh";
// mainbox.style.background = "#00000030";
// mainbox.style.border = "2px solid #000";
// mainbox.style.display = "flex";
// mainbox.style.alignItems = "end";

// box1.style.width = "50px";
// box1.style.height = "50px";
// box1.style.background = "lightblue";
// box1.style.border = "2px solid black";
// box1.style.transition = "all .4s";
// box1.style.position = "relative";
// box1.style.left = "0px";
// box1.style.top = "0px";

// // SET inteval, out

// // setInterval(()=>{}, 1000) // (funksiyon, saniye) sürekli çalışır
// // setTimeout(()=>{}, 1000) // (funksiyon, saniye) süre bitince bir kere çalışır

// // setInterval(timeClock, 1000)
// // let time = 0
// // function timeClock(){
// //     console.log(time);
// //     time +=1
// // }

// // setTimeout(()=>{
// //     console.log("merhaba");
// // }, 5000)

// posx = 0;
// posy = 0;
// window.addEventListener("keypress", (e)=>{
//     console.log(e.key);
//     if(e.key == "d"){
//         posx += 50;
//         box1.style.left = posx+"px";
//     }else if (e.key == "a"){
//         posx -= 50;
//         box1.style.left = posx+"px";
//     }else if (e.key == "w"){

//         setTimeout(() => { box1.style.transition = "all .8s"; box1.style.top = "-120px" },300)
//         setTimeout(() => { box1.style.transition = "all .6s"; box1.style.top = "0px" },700)
//     } 
    
// })


// ÖDEV
// dropdown menü yapılıcak,
//  hamburger menu tasarlanıcak,
// form oluşturun oluşturulan formda buton olucak butona basıldığında
//  form içindeki inputlar disabled olucak tekrar tıklandığın etkin hale gelicek


// ÖDEV
// dropdown menü yapılıcak, ok
//  hamburger menu tasarlanıcak,
// form oluşturun oluşturulan formda buton olucak butona basıldığında
//  form içindeki inputlar disabled olucak tekrar tıklandığın etkin hale gelicek


// TATİL ÖDEVLERİ BİREYSEL GELİŞİM
// ÖDEV 
// kendinize scroll animasyon fonksiyonu oluşturun
// let mainheader = document.querySelector(".mainheader")
// window.addEventListener("scroll", (e)=>{
//     console.log(window.scrollY);
//     if(window.scrollY > 400){
//         console.log("======================");
//         mainheader.style.background = "green";
//     }else if (window.scrollY <= 400){
//         mainheader.style.background = "crimson";
//     }
//     console.log(mainheader);
// })


// let showup = document.querySelector(".showup");
// window.addEventListener("scroll", ()=>{

//     if (window.scrollY > 700){
//         showup.style.transform = "translate(0)";
//         showup.style.opacity = "100"
//     }
    
// })


// ÖDEV
// keypress özelliği kullanarak bir nesneyi hareket ettirin
// ÖDEV
// fareyi takip eden bir cisim tasarlayın
// ÖDEV 
// tasarlanan cisim animasyon özelliği durduğunda bir özellik ekleyin 


// const move = document.getElementById("move")
// const ey1 = document.getElementById("ey1")
// const ey2 = document.getElementById("ey2")
// move.addEventListener("mousemove", (e) => {
//     console.log("Y", e.offsetY - 200);
//     var x = (e.offsetX - 200) / 20;
//     var y = (e.offsetY - 200) / 20;
//     ey1.style.transform = "translate(" + x + "px, " + y * 1.3 + "px)";
//     ey2.style.transform = "translate(" + x * 1.6 + "px, " + y + "px)";
// })

// const disableB = () => {
//     var username = document.getElementById("username")
//     var password = document.getElementById("password")
//     var todo = document.getElementById("todo")
//     username.toggleAttribute("disabled")
//     password.toggleAttribute("disabled")
//     console.log(username.value);

//     todo.innerHTML += "<div class='asd'>" + username.value + "</div>" + "<div class='asd'>" + password.value + "</div>";
// }



// console.log("SCRIPT YÜKLENDİ");

// var hamburger = document.getElementById("hamburger")
// hamburger.addEventListener("click", () => {
//     var menu = document.getElementById("menu")
//     menu.classList.toggle("menushow")

// })


// // var change = true;

// const DropDown = (e) => {
//     var drops = document.querySelectorAll(".drop")
//     var drop = e.nextElementSibling;

//     var change1 = drop.className.indexOf("d-flex")
//     console.log(drop.className);
//     console.log(change1);

//     drops.forEach(item => {
//         item.classList.remove("d-flex")
//         console.log("kaldırıldı");
//     })

//     if (change1 != -1) {
//         drop.classList.remove("d-flex")
//     } else {
//         drop.classList.add("d-flex");
//     }
//     //drop.classList.toggle("d-flex")
//     /*
//     console.log(drop);
//     if(change){
//         drop.style.display = "flex";
//     }else{
//         drop.style.display = "none";
//     }
//     console.log("change:",change);
//     change = !change
//     */
// }



// === JQUERY ===


// let classkutu1 = $(".kutu1");
// let idkutu1 = $("#kutu1");
// console.log(classkutu1);
// console.log(idkutu1);

// classkutu1.css("width","50px")
// classkutu1.css("height","50px")
// classkutu1.css("background","red")

// idkutu1.css({
//     width:"50px",
//     height:"50px",
//     background:"green"
// })

// classkutu1.addClass("dd1")
// idkutu1.addClass("dd1")
// idkutu1.removeClass("dd1")


// idkutu1.click(()=>{
//     idkutu1.toggleClass("dd1");
// })

// idkutu1.on("dblclick")



// var kutuid = $("#kutuid")

//     kutuid.click(function(){
//         $(".bx1").animate({
//             margin:"20px",
//             width:"200px",
//             translate:"200px"
//         },1000, function () {
//             $(".bx2").animate({
//                 opacity:"0.4",
//                 width: "50px",
//                 translate: "100px"
//             }, 1000,)})

//         $(".bx3").animate({
//             left: "+=50"
//         },50)
//     })

    

//     $("#kutuid2").click(function(){
//             $(".bx3").animate({
//             left: "-=50"
//         }, 50)
//     })

//     window.$("#kutuid2").keypress("d");
    
    

//     // 1) id olarak seçin, seçilen id css özellikleri jq ile verilecektir. width height 150px, bg red, 

//     // 2) dropdown toggle yapılıcak, tıklanınca menü açılıp kapanıcak

//     var droplink = $(".drop-link")
//     var dropmadde = $(".drop-madde")
//     dropmadde.slideToggle(0)
    
//     droplink.click(function(){
//         dropmadde.slideToggle(500)
//     })
    
//     var kutuid = $("#kutuid")

//     kutuid.css({
//         width: 200,
//         height: 200,
//         background: "red"
//     })
    
    
//     var x = 15;
//     x==10 ? x++ : x--;
//     console.log(x);



//     function tl(sec){
//         return document.querySelector(sec)
//     }
//     function style(sec,css){
//         return sec.style.cssText = "+"+ css +"+";
//     }

//     style(tl(".div2"), "width:200px;height:200px;background:red;")
    
//     console.log(tl(".div2"))

    
//     var div1 = $(".div1")
//     function shToggle(){
//         div1.toggle(2000)
        
        
//     }
    
//     $(".div2").click(function (){
//         div1.slideToggle(200)
//     })
    
    
    
    
//     var box3 = $(".box3")

//     box3.css({
//         width:200,
//         height:200,
//         background:"blue",
//     })

//     function infSlide(){
//         box3.slideUp(2000,function(){  
//             box3.slideDown(1000, infSlide())
//         })
//     }

        

    
//     $(".box1").fadeIn(5000, ()=>{
//         $(".box1").css({
//             "background": "black",
//             border: "4px solid red",
//         })
//     })

//     $(".box1").fadeOut(4000)

//     var box2 = $(".box2")

//     box2.fadeToggle(2000)
//     $(".box2").fadeToggle(2000)
//     box2.addClass("border")
//     box2.removeClass("border")
//     box2.toggleClass("border")
    
    
//     box2.hover(function(){
//         $(this).addClass("bg");
//     },
//         function () {
//             $(this).addClass("bg");
//         }, function () {
//             $(this).removeClass("bg");
//         }
//     )

