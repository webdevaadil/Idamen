import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import faqbg from '../components/image/bg-faqs.jpeg';
 

export default function Faq() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (

    <div id="faqs" className="fqs-main bg-fixed	my-24 mb-10 pt-16 pb-16 bg-no-repeat	bg-cover" style={{ backgroundImage: `url(${faqbg.src})` }}>
  
    <div className="max-w-7xl mx-auto">

    <div class="mx-auto max-w-7xl px-4 py-2 text-center mb-8">
      <h3 class="text-xls font-extrabold font-Quicksand mb-2 mt-4 ">Frequently asked questions</h3>
      <p class="text-base text-400 font-regular">We are committed to providing our customers with the highest quality <br/>solutions and support</p></div>






      

                <div className="flex faq-clms">
      <div className="w-1/2">  
                    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        What is the meaning of Lorem ipsum?
        </AccordionHeader>
        <AccordionBody>
         <p> Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        Why is Lorem Ipsum Dolor used?
        </AccordionHeader>
        <AccordionBody>
          We are not always in the position that we want to be at. We are
          constantly growing. We are constantly making mistakes. We are constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        What is the most used version?
        </AccordionHeader>
        <AccordionBody>
          We are not always in the position that we want to be at. We are
          constantly growing. We are constantly making mistakes. We are constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

    </Fragment>

                    
                    
                      </div>


                      <div className="w-1/2">  
                    <Fragment>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        What are the origins of Lorem Ipsum Dolor Sit?
        </AccordionHeader>
        <AccordionBody>
          We are not always in the position that we want to be at. We are
          constantly growing. We are constantly making mistakes. We are constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader onClick={() => handleOpen(6)}>
        Why is Lorem Ipsum Dolor used?
        </AccordionHeader>
        <AccordionBody>
          We are not always in the position that we want to be at. We are
          constantly growing. We are constantly making mistakes. We are constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7}>
        <AccordionHeader onClick={() => handleOpen(7)}>
        What is the most used version?
        </AccordionHeader>
        <AccordionBody>
          We are not always in the position that we want to be at. We are
          constantly growing. We are constantly making mistakes. We are constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8}>
        <AccordionHeader onClick={() => handleOpen(8)}>
        What is the most used version?
        </AccordionHeader>
        <AccordionBody>
          We are not always in the position that we want to be at. We are
          constantly growing. We are constantly making mistakes. We are constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </Fragment>

                    
                    
                      </div>



                </div>

    </div>

</div>


   





  );
}