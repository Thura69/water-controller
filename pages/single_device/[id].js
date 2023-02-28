import React, { useEffect,useState } from 'react'
import styles from '../../styles/SingleDevice.module.css'
import Router from 'next/router'
import WaterLowLevel from '../../components/waterCondition/waterLowLevel';
import WaterMediumLevel from '../../components/waterCondition/waterMediumLevel';
import WaterFullLevel from '../../components/waterCondition/waterFullLevel';
import WaterAnimation from '../../components/waterCondition/waterAnimation';

function SingleDevice() {
  const [waterConditionGround, setWaterConditionGround] = useState('');
  const [waterConditionHead, setWaterConditionHead] = useState('');
  const [autoModeCondition, setAutoModeCondition] = useState(false);
  
  const [deviceName, setDeviceName] = useState('');
  const [onOffGroud, setOnOffGroud] = useState(false);
  const [onOffHead, setOnOffHead] = useState(false);


  const [waterFakeData, setWaterFakeData] = useState(['low', 'medium', 'full']);



  const handleActiveGroundMotor = () => {
    if (!onOffGroud) {
      const picker = Math.floor(Math.random() * 3);



      setWaterConditionGround(waterFakeData[picker]);
      setOnOffGroud(true);
    } else if (onOffGroud) {
      setOnOffGroud(false);
    }
  }

  const handleAutoButton = () => {
    if (!autoModeCondition) {
      setOnOffGroud(true);
    setOnOffHead(true)
    const picker1 = Math.floor(Math.random() * 3);
     const picker2 = Math.floor(Math.random() * 3);
    
    setWaterConditionGround(waterFakeData[picker1]);
    setWaterConditionHead(waterFakeData[picker2]);


    setAutoModeCondition(true);
    } else if (autoModeCondition) {
      setAutoModeCondition(false)
    }



    
  }



  const handleActiveHeadMotor = () => {
    if (!onOffHead) {
    const picker = Math.floor(Math.random() * 3);



      setWaterConditionHead(waterFakeData[picker]);
      setOnOffHead(true);
    } else if (onOffHead) {
      setOnOffHead(false);
      
  }
  }


  useEffect(() => {
      setDeviceName(Router.query.id);
    
  }, []);



  return (
    <div className={styles.singleDevice}>
      <div className={styles.serialNumber}>
        <h3>Serial Number : <span>{deviceName}</span></h3>
      </div>
      <div className={styles.button_container}>
        <button className={styles.auto_button} onClick={handleAutoButton}>{autoModeCondition?"Manual":"Auto"}</button>
      </div>
      <div className={styles.water_container}>
        <div className={styles.water_container_one}>
          <div className={styles.water_circle_container_one}>
             <div>
              <h3 className={styles.motor_name}>Ground Motor</h3>
            </div>
           
            {
              onOffGroud ?   (() => {
                switch ( waterConditionGround) {
                  case "full": return <WaterFullLevel />;
                  case "medium": return <WaterMediumLevel />;
                  case "low": return <WaterLowLevel />;


                }
            })():<WaterAnimation />
           }
               
           
            <div className={styles.water_active_button_container}>
              {
                autoModeCondition? <button disabled="true" className={styles.water_active_button}>Auto Mode</button>:  <button className={styles.water_active_button}  onClick={handleActiveGroundMotor}>{onOffGroud?"Stop":"Start"}</button>
            }
          </div>

          </div>
        </div>
         <div className={styles.water_container_one}>
          <div className={styles.water_circle_container_one}>
             <div>
              <h3 className={styles.motor_name}>Overhead Motor</h3>
            </div>
           
         
            {
              onOffHead ?   (() => {
                switch ( waterConditionHead) {
                  case "full": return <WaterFullLevel />;
                  case "medium": return <WaterMediumLevel />;
                  case "low": return <WaterLowLevel />;


                }
            })():<WaterAnimation />
           }
               
           
            <div className={styles.water_active_button_container}>
              {
                autoModeCondition?<button  className={styles.water_active_button} disabled="true" >Auto Mode</button>:<button className={styles.water_active_button}  onClick={handleActiveHeadMotor}>{onOffHead?"Stop":"Start"}</button>
                }
          </div>

          </div>
        </div>
       
      </div>
    </div>
  )
}

export default SingleDevice