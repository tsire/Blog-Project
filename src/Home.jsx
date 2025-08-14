import './App.css'
import Body from './components/Body';
import Heading from './components/Heading';
import Footer from './components/Footer';
import Image from './components/Image'
import { body, mainTitle } from './constants';
// import image1 from './assets/image1.webp'

function Home() {

  return (
    <div style={{ background: 'pink', height: '100%', padding: '16px' }}>
      <Heading heading={mainTitle} fontSize='60px' />

      <Footer footer={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."} />
      <Footer footer={"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."} />
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <div>
          <Heading heading={'What is Lorem Ipsum?'} fontSize='30px' />
          <Image url={'src/assets/image1.webp'} />
          <Body body= {body.p1}/>
        </div>

        <div>
          <Heading heading={'Why do we use it?'} fontSize='30px' />
          <Image url={'src/assets/image2.webp'} />
          <Body body= {body.p2}/>
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <div>
          <Heading heading={'Where does it come from?'} fontSize='30px' />
          <Image url={'src/assets/image3.webp'} />
          <Body body= {body.p3}/>
        </div>

        <div>
          <Heading heading={'Where can I get some?'} fontSize='30px' />
          <Image url={'src/assets/image4.webp'} />
          <Body body= {body.p4}/>
        </div>
      </div>


      <Footer footer={"Translations: Can you help translate this site into a foreign language ? Please email us with details if you can help."} />
    </div>
  )
}

export default Home;
