import Card from "../card/card"

function App() {
const cards = [{
    id: 1,
    title: "Новинки Kosmoteros",
    description: "Обзор новых средств и методик от Kosmoteros.",
    date: "01.02.2025",
    time: "10:00",
    photo: "https://picsum.photos/id/1/750/730"
  }, {
    id: 2,
    title: "Новинки Kosmoteros",
    description: "Обзор новых средств и методик от Kosmoteros.",
    date: "01.02.2025",
    time: "10:00",
    photo: "https://picsum.photos/id/1/750/730"
  },{
    id: 3,
    title: "Новинки Kosmoteros",
    description: "Обзор новых средств и методик от Kosmoteros.",
    date: "01.02.2025",
    time: "10:00",
    photo: "https://picsum.photos/id/1/750/730"
  }]
  return (
    <div className="w-screen h-dvh flex flex-col items-center bg-slate-50 p-10">
      <h1 className='text-indigo-600 font-bold mb-4'>Семинары</h1>
      <div className="flex flex-wrap gap-10 justify-center">{cards.map((card)=> <Card key={card.id} card={card}/>)}</div>
    </div>
  )
}

export default App
