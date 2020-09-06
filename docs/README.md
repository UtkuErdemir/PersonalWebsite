---
pageClass: home-page
# some data for the components

name: Utku Erdemir
profile: /logo.png

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/UtkuErdemir
  - title: facebook
    icon: "/icons/facebook.svg"
    link: https://www.facebook.com/Utku.Erdemir
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com/Utku_Erdemir
  - title: twitter
    icon: "/icons/twitter.svg"
    link: https://www.twitter.com/Utku_Erdemir

cv: /cv.docx
bio: Yazılım Mühendisi / Endüstri Mühendisliği Öğrencisi
email: utku.erdemir.ue@gmail.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## Hakkımda

<div style="text-align: justify">Çocukluğumdan beri Bilişim Teknolojileriyle uğraşmaktayım. En başta bir heves olarak başlayan bu yolda yaklaşık beş yılı profesyonel yazılım geliştiricisi olmak üzere dokuz yıl geçirdim. Genel olarak mobil ve internet uygulamaları geliştirmekteyim. Bir çok mobil ve internet uygulamaları geliştirme tekonolojisini kullandım. Bu yüzden bilmediğim bir teknolojiye alışma sürecim normal birine kıyasla çok hızlıdır. Kendimi hem alaylı olarak yetiştirdiğim hem de konu hakkında liseden bu yana eğitimler almamdan ötürü gelişimim akranlarıma göre daha iyi ve fazla olmuştur. Hobilerim arasında müzik yapmak, bilgisayar oyunu oynamak, kitap okumak, spor yapmak ve yeni yerler keşfetmek vardır.</div>

[→ Daha Fazlasını Göster](/about/)
## Eğitimim

- **Şişli Teknik Meslek Listesi-Bilişim Teknolojileri (VT Programcılığı)** <br/>
2012-2016 - *Not Ortalaması: 91.96 / 100*<br/><br/>
- **Beykent Üniversitesi-Yazılım Mühendisliği** <br/>
2016-2020 - *Not Ortalaması: 3.97 / 4.0*<br/><br/>
- **Beykent Üniversitesi-Endüstri Mühendisliği** <br/>
2017-Şimdi<br/>

## Yeteneklerim
<table>
<tr>
<td>
  - Proje Yönetimi</br></br>
	- Mobil Uygulama Geliştirme (Native)</br></br>
	- Mobil Uygulama Geliştirme (Hybrid ve Cross)</br></br>
	- NoSQL Veri Tabanı Modelleme ve Sorgulama</br>
</td>
<td>
	-	İnternet Uygulamaları Ön Uç Birim Geliştirme</br></br>
	-	İnternet Uygulamaları Arka Uç Birim Geliştirme</br></br>
	-	İlişkisel Veri Tabanı Modelleme ve Sorgulama</br></br>
  - İstatistik
</td>
</tr>
</table>

## Deneyimim


[→ Bütün Liste](/projects/)


<ProjectCard hideBorder=true>

  ### Mobil ve Web Uygulama Geliştiricisi – 2015 / Günümüz
  #### Perpa Ticaret Merkezi, İstanbul
  - Lisedeyken stajyer olarak başladım. İlk olarak Java ile mobil uygulamalarını geliştirdim lakin ardından gereksinimlerin React-Native’in de biraz daha toparlanmasının ardından ona geçirdim.
  - İnternet sitelerinin ara yüzlerinin ve arka plan kodlarının belirli bir kısmını yazdım.
  - PerpaTV uygulamasını Ionic Framework’ün birinci sürümü ile 2015’te geliştirdim.
  - Bina içi navigasyonun belirli kısımlarında bulundum.

</ProjectCard>

<ProjectCard hideBorder=true>

  ### Mobil Uygulama Geliştiricisi – 2016 / Günümüz
  #### Ajan.Net Bilişim Hizmetleri, İstanbul
  - Lisenin son yılında PostmanMobile uygulamasının Java ile yazılmış kodlarına belirli başlı eklerde bulundum.
  - Liseden mezun olmamla beraber firma içerisindeki PostmanMobile uygulamasını Hybrid geliştirme yöntemi olan Ionic Framework’e geçirdim.

</ProjectCard>


## Katıldığım Yarışmalar

- IEEE MadC - 2018 / 2019
- IEEE Xtreme - 2018

## Katkıda Bulunduğum Projeler

- **Empati (2018):** İşaret Dilinin Etkin bir şekilde öğretilmesini amaçlayan mobil uygulamadır. Arka uç birim, veri tabanı ve mobil uygulamanın geliştirilmesinde katkı sağladım ve bu uygulamayı geliştirdikten sonra IEEE MadC yarışmasına katıldık. 
- **Benimki Nerede(2020):** Varlıkların kaybolmasını önlemek amacıyla Bluetooth teknolojisi kullanılıp geliştirilen mobil uygulamadır. Bütün geliştirmesinde bulundum ve projenin koordinasyonunu sağladım. 


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
