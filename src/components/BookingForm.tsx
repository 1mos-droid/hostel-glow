
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css';

const designs = [
    { id: '1', title: 'Bohemian Dream' },
    { id: '2', title: 'Industrial Chic' },
    { id: '3', title: 'Minimalist Haven' },
    { id: '4', title: 'Coastal Vibes' },
    { id: '5', title: 'Urban Jungle' },
    { id: '6', title: 'Retro Funk' },
];

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [selectedDesign, setSelectedDesign] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className={styles.formContainer}>
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}>
                        <h2>Step 1: Choose Your Design</h2>
                        <select value={selectedDesign} onChange={(e) => setSelectedDesign(e.target.value)} className={styles.select}>
                            <option value="">Select a design</option>
                            {designs.map(d => <option key={d.id} value={d.id}>{d.title}</option>)}
                        </select>
                        <button onClick={nextStep} className={styles.button}>Next</button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}>
                        <h2>Step 2: Schedule Your Appointment</h2>
                        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} inline />
                        <div className={styles.buttons}>
                            <button onClick={prevStep} className={styles.button}>Back</button>
                            <button onClick={nextStep} className={styles.button}>Next</button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}>
                        <h2>Step 3: Your Details</h2>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
                        <div className={styles.buttons}>
                            <button onClick={prevStep} className={styles.button}>Back</button>
                            <button onClick={() => alert('Booking confirmed!')} className={styles.button}>Confirm Booking</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BookingForm;
