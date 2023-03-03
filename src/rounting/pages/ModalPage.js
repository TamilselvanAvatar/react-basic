import React, { useState } from 'react'
import Modal from '../components/modal'
import Button from '../components/button'
const ModalPage = () => {
    const [showModal, setShowModal] = useState(false)
    const onCloseHandler = () => {
        setShowModal(false)
    }
    const actionBar = <Button rounded primary onClick={onCloseHandler}>I Accept</Button>
    const modal = <Modal onClose={onCloseHandler} actionBar={actionBar}>
        <p>
            Here is important term and condition need to agree on
        </p>
    </Modal>
    return <div>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <p>The LSPM combines a permanent magnet rotor that allows higher motor efficiency during synchronous operation, and an induction motor squirrel cage rotor for starting the motor by connecting it directly to an A.C. Source. In this paper, we will deal with the efficiency and Power factor improvement of a 3.4kW, 2-pole, three-phase LSPM.</p>
        <Button onClick={() => setShowModal(true)} success rounded outlined >Open Modal</Button>
        {showModal && modal}
    </div>
}

export default ModalPage