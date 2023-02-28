import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import Device from '../components/device/device'
import NewDevice from '../components/newDevice'
import Link from 'next/link'
import DeviceInfo from '../components/deviceInfo/deviceInfo'
import { useSelector,useDispatch } from 'react-redux'


export default function Home() {
  
  const [openNewDevice, setOpenNewDevice] = useState(false);
  const [fakeArray, setFakeArray] = useState([{ serialNumber: "123456", name: "Home", isActive: true }, { serialNumber: "1111", name: "Kitchen", isActive: false }]);
  const [openDeviceInfo, setOpenDeviceInfo] = useState(false);

  const selector = useSelector((state) => state.login);

  

  const user = true;

  useEffect(() => {
    if (!user) {
      Router.push('/login');
    }
  }, [user]);

  const handleAddMoreDevice = () => {
    setOpenNewDevice(true);
      document.querySelector('body').style.overflow = "hidden";

  }

  const handleDeviceInfo = () => {
    setOpenDeviceInfo(true);
     

  }

  return (
    <div className={styles.home}>
    
      <div className={styles.home_greeting}>
        <div className={styles.home_greeting_partone}>
          <div className={styles.home_greeting_des}>
            <h3 className={styles.home_greeting_title}>Welcome</h3>
            <p className={styles.home_greeting_name}>Good Morning, <span className={styles.home_username}>Mr.lorem</span></p>
          </div>
          <div className={styles.home_greeting_time}>
            <p>{(new Date()).toLocaleDateString('en-GB')}</p>
          </div>
        </div>
        <div className={styles.home_greeting_parttwo}>
          <IoMdAdd onClick={handleAddMoreDevice} className={styles.home_add_device}  />
        </div>
      </div>

      <div className={styles.home_devices_place}>
        <h3 className={styles.home_title}>Devices</h3>
        <div className={styles.home_devices_container}>
          {
            fakeArray.map((device) => (
                 <Device key={Math.random() * 10000}  serialNumber={device.serialNumber} name={device.name}  isActive={device.isActive} setOpenDeviceInfo={setOpenDeviceInfo}  />
            ))
         }
        </div>
       
       
          {
            openNewDevice?  <div className={styles.newDeviceWrapper}>  <NewDevice setOpenNewDevice={setOpenNewDevice} setFakeArray={setFakeArray} /></div> :""
        }

       {
          openDeviceInfo ? <div className={styles.newDeviceWrapper}> <DeviceInfo setOpenDeviceInfo={setOpenDeviceInfo} /></div>
       :""
       }      
        </div>
         <div className={styles.bubble}></div>
      </div>
      

  )
}

