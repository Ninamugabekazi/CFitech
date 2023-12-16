import React from 'react'
import img13 from '../../images/img13.jpg'
import img10 from '../../images/img10.jpg'
import {Card, Col, Row } from 'react-bootstrap';
import './Forminitiation.css'
import { Button } from 'react-bootstrap';


export default function Formationinitiation() {
  return (
    <>
  
    <div>
          <Card className="bg-dark text-white">
            <Card.Img src={img13} height={600}  width={600} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title><h1><span style={{backgroundColor:'white', color:'black'}}>Initiation en informatique</span></h1></Card.Title>
              <Card.Text>
                <p  style={{backgroundColor:'white', color:'black'}}>Aujourd’hui l’informatique est devenue un outil indispensable et l’utilisation d’un ordinateur est bien souvent obligatoire tant dans le cadre familial que dans le cadre professionnel.</p>
              </Card.Text>
              <Button variant="primary" size="lg" disabled>
        S'inscrire
      </Button>
            </Card.ImgOverlay>
          </Card>
    

    <div class="grid-contain">
          <div className='boxContainer d-flex'>
                      <div className='progimg'>
                      <img src={img10} height={500} width={500} alt='image' className='img-fluid'/>
                      </div>
                      <div className='prog'>      
                              <h2><i class="fa-solid fa-file-lines" style={{color:'#063970', padding:'20px'}}></i><span style={{backgroundColor:'yellow'}}>Programmes des cours</span></h2>
                              <div className='liste'>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Culture Générale en informatique</p>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Découverte de linux</p>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>L’invite de commande cmd</p>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Introduction à windows 10</p>
                                <p><i class="fa-solid fa-gears" style={{color:'#063970'}}></i>Math Algorithmique</p>
                              </div>
                      </div>
                   
        </div>
    </div>
  

<div class="grid-container">
        <div>
        <i class="fa-solid fa-user" style={{fontSize:'40px', color:'#063970'}}></i>
          <h2><span style={{backgroundColor:'yellow'}}>Pour qui ?</span></h2>
          <p> Être demandeur (se) d’emploi inoccupé(e), inscrit(e) à Actiris et disponible à temps plein.</p>   
        </div>
          
        <div>
        <i class="fa-regular fa-calendar-days" style={{fontSize:'40px', color:'#063970'}}></i>
          <h2><span style={{backgroundColor:'yellow'}}>Horaires:</span></h2>
          <p>Lundi au vendredi 8h30 à 16h.</p>
        </div>
        
      <div>
      <i class="fa-solid fa-wand-magic-sparkles" style={{fontSize:'40px', color:'#063970'}}></i>
          <h2><span style={{backgroundColor:'yellow'}}>Intéressé (e) ? Que faire ?</span></h2>
          <h5>Présentez-vous directement à notre adresse :</h5>
              <p>CFITECH</p>
              <p>Rue de l’EgLise Sainte-Anne 63</p>
              <p>1081 Koekelberg</p>
              <p>Tél:02 445 39 08</p>
              <p>L’inscription du :Lundi au vendredi</p>
              <p>Heure:9h à 16h</p>
       </div>


</div>

   
  





     
    </div>
</>
  )
}
