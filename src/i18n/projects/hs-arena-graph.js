export default {
    en: {
      title: "Use Graph theory to draft Hearthstone Arena",
      idea: "Use Graph theory to draft Hearthstone Arena cards",
      date: "05/25",
      keywords: "Graph theory/Graph/DFS/BFS",
      source: "https://github.com/patkamon/hs-arena-graph/break/youtube/break/deploy",
      paragraph_1: "In Hearthstone Arena, cards are drafted by randomly selecting 3 cards for players to choose from, and they must select 1 card from the 3 randomly drawn cards.",
      paragraph_2: "Heartharena is a website that provides information about cards in Hearthstone Arena to assist in card selection for the Arena mode. It assigns scores to cards in each draft round, indicating which card is likely the best choice for that round.",
      image_1: "/img/hs_arena_graph_1.png",
      paragraph_3: "However, the scores are based on the impact of those cards and do not consider whether the drafted cards are consistent with the previously selected cards.",
      image_2: "/img/hs_arena_graph_2.png",
      paragraph_4: "I attempted to address this issue by using graph theory for card drafting. I connected cards that belong to the same deck used in the Arena as a graph. Cards within the same deck are connected by paths with a cost of 1. Therefore, when selecting a new card, we take the selected card as the starting point and run BFS to find cards within the deck, calculating costs iteratively until all cards are covered to find the median. We repeat this process with the other two cards available for selection to find the card with the lowest median, indicating the highest consistency.",
      paragraph_5: "An area for improvement is that there are many cards that can be found in the Arena but not in the ranked mode, making it impossible to determine the cost of these cards."
    },
    th: {
      title: "ใช้ Graph theory draft การ์ด Hearthstone Arena",
      idea: "ใช้ Graph theory draft การ์ด Hearthstone Arena",
      date: "05/25",
      keywords: "Graph theory/Graph/DFS/BFS",
      source: "https://github.com/patkamon/hs-arena-graph/break/youtube/break/deploy",
      paragraph_1: "การ์ดในเกม Hearthstone Arena จะมีการ draft การ์ด โดยจะมีการสุ่มการ์ดมาให้เลือก 3 ใบ และเราจะต้องเลือกการ์ด 1 ใบจาก 3 ใบที่สุ่มมาให้",
      paragraph_2: "heartharena คือเวบไซต์ที่ให้ข้อมูลการ์ดในเกม Hearthstone Arena ใช้ในการช่วยเลือกการ์ดสำหรับโหมด Arena โดยจะมีการให้คะแนนการ์ดในแต่ละรอบการ draft ว่าการ์ดไหนน่าจะเป็นการ์ดที่ดีที่สุดในรอบนั้นๆ",
      image_1: "/img/hs_arena_graph_1.png",
      paragraph_3: "แต่คะแนนที่ว่านับจากimpact ของการ์ดใบนั้นๆ ไม่ได้สนใจว่าการ์ดที่ดราฟมามีความสอดคล้องกับใบก่อนหน้าที่ได้เลือกไปหรือไม่",
      image_2: "/img/hs_arena_graph_2.png",
      paragraph_4: "ผมเลยพยายามแก้ปัญหานี้โดยการใช้ graph theory ในการ draft การ์ด โดยการดึงการ์ดที่อยู่ในเด็คเดียวกันที่ใช้ในแร้งมาเชื่อมเป็น กราฟ การ์ดที่อยู่ในเด็คเดียวกันจะมี path เชื่อมไปหากัน และมี cost ที่1 ดังนั้น เวลาที่เราจะเลือกใบใหม่ให้เรานำ การ์ดที่เลือก เป็นจุด start และรัน BFS ไปหาการ์ดที่อยู่ในเด็ค เพื่อหา cost วนซ้ำจนครบทุกใบ เพื่อหา median และวนซ้ำ กับการ์ด อีกสองใบที่มีให้เลือก เพื่อหาใบที่ median น้อยที่สุด ซึ่งแปลว่า มีความสอดคล้องกันมากที่สุด",
      paragraph_5: "พื้นที่ให้ปรับปรุงคือ จะสังเกตุ ว่ามีการ์ดหลายใบที่พบได้ใน arena แต่ ไม่พบใน แร้ง ทำให้ ไม่สามารถ บอกcost ของใบนี้ได้"
    },
  }