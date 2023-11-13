// let bakiye = 1000;
// while (true) {
//     let secim = prompt("1. Bakiye Sorgula\n2. Para Çek\n3. Para Yatır\n4. Çıkış\nLütfen bir seçenek girin:");
//     switch (secim) {
//         case "1":
//             alert("Bakiyeniz: " + bakiye + "₺");
//             break;

//         case "2":
//             let cekilecekMiktar = prompt("Çekmek istediğiniz miktarı girin:");
//             cekilecekMiktar = parseFloat(cekilecekMiktar);

//             if (cekilecekMiktar > 0 && cekilecekMiktar <= bakiye) {
//                 bakiye -= cekilecekMiktar;
//                 alert("Yeni bakiyeniz: " + bakiye + "₺");
//             } else {
//                 alert("Geçersiz miktar veya yetersiz bakiye!");
//             }
//             break;

//         case "3":
//             let yatirilanMiktar = prompt("Yatırmak istediğiniz miktarı girin:");
//             yatirilanMiktar = parseFloat(yatirilanMiktar);

//             if (yatirilanMiktar > 0) {
//                 bakiye += yatirilanMiktar;
//                 alert("Yeni bakiyeniz: " + bakiye + "₺");
//             } else {
//                 alert("Geçersiz miktar!");
//             }
//             break;

//         case "4":
//             alert("Çıkış yapılıyor. Güle güle!");
//             return;

//         default:
//             alert("Geçersiz bir seçenek girdiniz. Lütfen tekrar deneyin.");
//     }
// }



// let karakterler = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]
// let hexcode=[]

// for(let i=0; i<= 5;i++){
//     let random_item= Math.floor(Math.random()* karakterler.length -1 ) + 1
//     hexcode.push(karakterler[[random_item]])
// }
// console.log(`#${hexcode[0]}${hexcode[1]}${hexcode[2]}${hexcode[3]}${hexcode[4]}${hexcode[5]}`)


// const karakterler = ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z", "q", "w", "x", "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "I", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "Ş", "T", "U", "Ü", "V", "Y", "Z", "Q", "W", "X", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "!", "'", "^", "+", "%", "&", "/", "(", ")", "=", "?", "-", "_", "*", ",", ";", "`", "{", "}", "[", "]", "@", "|", "<", ">", ".", ":", "é", "$", "#", "£", "€", "₺"];

// const generatedPassword = generateRandomPassword(parseInt(desiredPasswordLength), karakterler);
// console.log("Oluşturulan Şifre:", generatedPassword);


// class BankaUygulamasi {
//     constructor() {
//         this.bakiye = 1000;  // Kullanıcının hesabına başlangıçta 1000₺ tanımlanmıştır.
//     }

//     bakiyeSorgula() {
//         alert(`Kalan bakiye: ${this.bakiye}₺`);
//     }

//     paraCek(miktar) {
//         if (miktar > 0 && miktar <= this.bakiye) {
//             this.bakiye -= miktar;
//             alert(`${miktar}₺ çekildi. Yeni bakiye: ${this.bakiye}₺`);
//         } else {
//             alert("Geçersiz miktar veya yetersiz bakiye.");
//         }
//     }

//     paraYatir(miktar) {
//         if (miktar > 0) {
//             this.bakiye += miktar;
//             alert(`${miktar}₺ yatırıldı. Yeni bakiye: ${this.bakiye}₺`);
//         } else {
//             alert("Geçersiz miktar.");
//         }
//     }
// }