import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook,  FaBlogger } from "react-icons/fa";
import classes from './Home.css'
import {motion} from 'framer-motion'
import React  from 'react';
const handleURL =(url) => {
    return () => window.open(url,"_blank")
}
const Home = () => {
    return ( 
        
        <div className='Contact'>
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
                <motion.div whileHover={{scale: 1.2}}>
                    <FaTwitter color ='00acee' size= '30px' style={{padding: '1%'}}
                    onClick={handleURL('https://www.youtube.com/channel/UC5I1ZV96xf-qffbCdFYZihg')} />
                </motion.div>
                <motion.div whileHover={{scale: 1.2}}> 
                    <FaInstagram color="#8a3ab9"  size= '30px' style={{padding: '1%'}}
                    onClick={handleURL('https://www.instagram.com/a.s.h.i.s.h.w.a.g.l.e/')} />
                </motion.div>

                <motion.div whileHover={{scale: 1.2}}> 
                    <FaFacebook color="#4267B2"  size= '30px' style={{padding: '1%'}}
                    onClick={handleURL('https://www.instagram.com/a.s.h.i.s.h.w.a.g.l.e/')} />
                </motion.div>


                <motion.div whileHover={{scale: 1.2}}>
                    <FaLinkedin color ='#0e76a8' size= '30px' style={{padding: '1%'}}
                     onClick={handleURL('https://www.linkedin.com/in/ashish-wagle-a4155313a/')} />
                 </motion.div>
                 <motion.div whileHover={{scale: 1.2,}}>
                    <FaBlogger color ='#fc4f08' size= '30px' style={{padding: '1%'}}
                     onClick={handleURL('https://www.linkedin.com/in/ashish-wagle-a4155313a/')} />
                 </motion.div>
                 </div>
        </div> </div>
     );
};
 
export default Home;