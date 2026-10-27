<script setup>
import Contact from './components/layout/Contact.vue'
import Nav from './components/layout/Nav.vue'
</script>

<template>
  <Nav />
  <main>
    <img class="banner-image" src="/images/lithuania-banner.webp" alt="" />
    <h1 class="container">Sveiki atvyke</h1>
    <h2 class="container">Bažynčios Lietuvoje jus nuoširdžiai sveikina</h2>
    <p class="container">
      Mes esame tikintieji Viešpatyje Jėzuje Kristuje, asmeniškai priėmę Jį kaip savo Gelbėtoją. Jis
      yra pati puikiausia ir maloniausia Asmenybė. Mes Jį mylime ir stengiamės visame kame suteikti
      Jam pirmąją vietą. Mes džiaugiamės, kad esame apvalyti Jėzaus, Dievo Sūnaus krauju, atgimę iš
      Tėvo dieviškosios gyvybės ir pripildyti Šventosios Dvasios.
    </p>
    <p class="container">
      Mes labai branginame Šventąją Bibliją kaip Dievo apreiškimą apie Save Patį ir apie Savo
      amžinąjį tikslą. Mes laikomės bendro tikėjimo, apreikšto Biblijoje ir bendro visiems tikriems
      tikintiesiems.
    </p>
    <p class="container">
      Kaip ir visi tikintieji Kristuje, mes esame Jo vieno Kūno, bažnyčios, nariai. Tam, kad
      praktiškai įgyvendintume Kūno vienybę su visais krikščionimis Lietuvoje, mes susirenkame kaip
      bažnyčia savo miestuose/vietovėse. Mes palaikome bendravimą su daugiau kaip 2 000 vietinių
      bažnyčių visame pasaulyje, kad išreikštume vieną Kristaus Kūną.
    </p>
    <div class="container">
      <h2>Mūsų bendrasis tikėjimas</h2>
      <p>Mes laikomės tikėjimo, kuris yra bendras visiems tikintiesiems (Tit 1:4; Jud 3).</p>
      <ul>
        <li>
          Biblija yra pilnas dieviškasis apreiškimas, žodis po žodžio įkvėptas Dievo per Šventąją
          Dvasią (2 Pt 1:21; 2 Tim 3:16).
        </li>
        <li>
          Dievas yra unikaliai vienas, tačiau trivienis – Tėvas, Sūnus ir Dvasia (1 Tim 2:5a; Mt
          28:19).
        </li>
        <li>
          Dievo Sūnus, pats Dievas, įsikūnijo ir tapo žmogumi, vardu Jėzus Kristus (Jn 1:1, 14).
        </li>
        <li>
          Kristus mirė ant kryžiaus už mūsų nuodėmes, išliedamas Savo kraują mūsų atpirkimui (1 Pt
          2:24; Ef 1:7a).
        </li>
        <li>Kristus trečiąją dieną prisikėlė iš numirusiųjų (1 Kor 15:4).</li>
        <li>Kristus pakilo į Dievo dešinę, kad būtų visų Viešpats (Apd 1:9; 2:33, 36).</li>
        <li>
          Kai žmogus atgailauja Dievui ir įtiki Viešpatį Jėzų Kristų, jis atgimsta (gimsta iš naujo)
          ir tampa gyvu vieno Kristaus Kūno nariu (Apd 20:21; Jn 3:3; Ef 1:22–23; Rom 12:5).
        </li>
        <li>Kristus vėl ateis pasiimti Savo tikinčiųjų pas Save (1 Tes 2:19).</li>
      </ul>
    </div>
  </main>
  <Contact class="container alt-background" />
</template>

<style scoped lang="scss">
.banner-image {
  display: block;
  width: 100%;
  height: clamp(220px, 35vw, 300px);
  object-fit: cover;
  object-position: center;
}
</style>
