export default {
    en: {
      title: "Clone game by webscrap from wiki",
      idea: "Scrape the game data from wiki and display it in the game format. The wiki page has a similar structure, so if the code can convert one page, it can convert all pages.",
      date: "10/24",
      keywords: "Golang/Colly/Pixel",
      source: "github/break/https://youtu.be/TkfNuNIR_Yo?si=wZvu0IaLSDqmwHkO/break/deploy",

      image_1: "/img/go_rag_2.png",
      paragraph_1: "Normally, when we want to add a new character to the game, we have to create a new character. This involves loading new sprites or images and filling in various values such as name, hp, attack, etc. This process is quite repetitive and time-consuming. However, if we already have the character data in the wiki, we can use that data directly.",
      image_2: "/img/go_rag_3.png",
      paragraph_2: "The method I used is to web scrape data from the wiki using the Colly library in Golang. This library makes it very easy to extract data from web pages, allowing us to specify the selectors we need.",
      paragraph_3: "Colly works by extracting data from the web page we want. In this case, we will extract the wiki map page of Ragnarok, which contains all the details of the maps and monsters in those maps, including portals that connect to the next map.",
      image_3: "/img/go_rag_1.png",
      paragraph_4: "After that, we will have the data we need in the form of structs, which we can use to render the game directly using the Pixel library. This library simplifies rendering games in Golang, allowing us to specify sprites and animations easily.",
      paragraph_5: "The result is that we can use the wiki data in the game without changing our code at all. We can display information for every map available in the wiki.",
    },
    th: {
      title: "โคลนเกมโดยการ webscrap จาก wiki",
      idea: "ดึงข้อมูลเกมที่มีอยู่แล้วใน wiki มาแสดงผลในรูปแบบของเกม ซึ่งwiki page จะมีstructure ที่เหมือนกัน ดังนั้นถ้า code สามารภ แปลงข้อมูลลงมาได้ 1 หน้า ก็สามารถแปลงได้ทุกหน้า",
      date: "10/24",
      keywords: "Golang/Colly/Pixel",
      source: "github/break/https://youtu.be/TkfNuNIR_Yo?si=wZvu0IaLSDqmwHkO/break/deploy",
      image_1: "/img/go_rag_2.png",
      paragraph_1: "ตามปกติของการทำเกม เวลาเราจะเพิ่มตัวละครใหม่ เราจะต้องมีการสร้างตัวละครใหม่ขึ้นมา ซึ่งจะมีการ load sprite หรือรูปภาพ ใหม่ขึ้นมา และต้องมีการกรอกค่าต่างๆ เช่น ชื่อ, hp, attack เป็นต้น ซึ่งเป็นการทำที่ซ่ำซ้อนและใช้เวลาค่อนข้างเยอะ แต่ถ้าเรามีข้อมูลของตัวละครอยู่แล้วใน wiki เราสามารถดึงข้อมูลเหล่านั้นมาใช้ได้เลย",
      image_2: "/img/go_rag_3.png",
      paragraph_2: "วิธีที่ผมใช้ คือ webscrap ข้อมูลจาก wiki โดยใช้ library colly ของ golang ซึ่งเป็น library ที่ทำให้การดึงข้อมูลจากเว็บเพจเป็นเรื่องง่ายมากๆ โดยเราสามารถกำหนด selector ที่เราต้องการได้เลย",
      paragraph_3: "การทำงานของ colly จะเป็นการดึงข้อมูลจากหน้าเว็บเพจที่เราต้องการ ซึ่งในที่นี้จะดึงหน้า wiki map ของ ragnarok ซึ่งมีรายละเอียดทั้งหมดของ map และ monster ใน mapนั้นๆ รวมไปถึง portal ซึ่งเชื่อมไป map ถัดไป",
      image_3: "/img/go_rag_1.png",
      paragraph_4: "หลังจากนั้นเราก็จะได้ข้อมูลที่เราต้องการมาในรูปแบบของ struct ซึ่งเราสามารถนำไปใช้ render เป็นเกมได้เลย โดยการใช้ library pixel ซึ่งเป็น library ที่ทำให้การ render เกมใน golang เป็นเรื่องง่ายมากๆ โดยเราสามารถกำหนด sprite และ animation ได้เลย",
      paragraph_5: "ผลลัพที่ได้คือเราสามารถดึงข้อมูลจาก wiki มาใช้ในเกมได้เลย โดยที่ โค้ดเราไม่ต้องเปลี่ยนแปลงอะไรเลย แต่สามารถแสดงข้อมูลทุก map ที่มีใน wiki ได้เลย",

    },
  }