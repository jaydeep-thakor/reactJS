import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-8">

      <Card castImg="https://images.hdqwalls.com/wallpapers/thumb/millie-bobby-brown-as-eleven-in-stranger-things-season-5-rg.jpg" castName="Eleven" realName="Millie Bobby Brown" />
      <Card castImg="https://images.hdqwalls.com/wallpapers/thumb/finn-wolfhard-as-mike-wheeler-in-stranger-things-season-5-05.jpg" castName="Mike Wheeler" realName="Finn Wolfhard" />
      <Card castImg="https://images.hdqwalls.com/wallpapers/thumb/noah-schnapp-as-will-byers-in-stranger-things-season-5-vt.jpg" castName="Will Byers" realName="Noah Schnapp" />
      <Card castImg="https://images.hdqwalls.com/wallpapers/thumb/caleb-mclaughlin-as-lucas-sinclair-in-stranger-things-season-5-yu.jpg" castName="Lucas Sinclair" realName="Caleb McLaughlin" />
      <Card castImg="https://images.hdqwalls.com/wallpapers/thumb/gaten-matarazzo-as-dustin-henderson-in-stranger-things-season-5-ma.jpg" castName="Dustin Henderson" realName="Gaten Matarazzo" />
      <Card castImg="https://images.hdqwalls.com/wallpapers/thumb/joe-keery-as-steve-harrington-in-stranger-things-season-5-vh.jpg" castName="Steve Harrington" realName="Joe Keery" />
      <Card castImg="https://images.hdqwalls.com/wallpapers/thumb/natalia-dyer-as-nancy-wheeler-in-stranger-things-season-5-tt.jpg" castName="Nancy Wheeler" realName="Natalia Dyer" />
      
    </div>
  )
}

export default App