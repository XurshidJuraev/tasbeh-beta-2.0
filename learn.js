// import React from 'react';
// import './App.scss';

// import Modal from './Components/Modal/Modal'

// function App () {

//     const [modal, setModal] = React.useState(false)

//     return (
//         <>
//             App

//             <button onClick={() => setModal(true)}>open</button>

//             <Modal text='Hello world' modal={modal} setModal={setModal} />
//         </>
//     );
// }

// export default App;

// import React from 'react';
// import './Modal.scss';

// function Modal({ text, modal, setModal }) {
// 	return (
// 		<div
// 			className={`modal ${modal ? 'modal--open' : null}`}
// 			onClick={(evt) => {
// 				if (evt.target.matches('.modal')) {
// 					setModal(false);
// 				}
// 			}}>
// 			<div className='modal__inner'>
// 				<h3>{text}</h3>{' '}
// 				<button onClick={() => setModal(false)}>x</button>
// 			</div>
// 		</div>
// 	);
// }

// export default Modal;

// ==========================
// REF
// ==========================

// import React from 'react';
// import './App.scss';

// import Modal from './Components/Modal/Modal'

// function App () {
//     const modalRef = React.useRef(null)

//     return (
//         <>
//             App

//             <button onClick={() => modalRef.current.classList.add('modal--open')}>open</button>

//             <Modal ref={modalRef} text='Hello world' />
//         </>
//     );
// }

// export default App;

// import React from 'react';
// import './Modal.scss';

// const Modal = React.forwardRef(({ text }, ref) => {
// 	return (
// 		<div
// 			className='modal'
// 			ref={ref}
// 			onClick={(evt) => {
// 				if (evt.target.matches('.modal')) {
// 					ref.current.classList.remove('modal--open');
// 				}
// 			}}>
// 			<div className='modal__inner'>
// 				<h3>{text}</h3>{' '}
// 				<button
// 					onClick={() => ref.current.classList.remove('modal--open')}>
// 					x
// 				</button>
// 			</div>
// 		</div>
// 	);
// });

// export default Modal;

// ==============================
// Component lifecycle
// =============================

// import React from 'react';
// import './App.scss';

// function App() {
// 	const [userName, setUserName] = React.useState('bnmma');
// 	const [password, setPassword] = React.useState('********');

// 	// componentDidMount
// 	// React.useEffect(() => {
// 	//     console.log('Component mounted')

// 	// }, [])

// 	// componentDidUpdate
// 	React.useEffect(() => {
// 		console.log('Component Updated!');
// 	}, [userName]);

// 	// React.useEffect(() => {
// 	//     window.document.title = userName
// 	// }, [userName])

// 	return (
// 		<>
// 			<form>
// 				<input
// 					type='text'
// 					name='username'
// 					placeholder='username...'
// 					value={userName}
// 					onChange={(evt) => setUserName(evt.target.value)}
// 				/>

// 				<input
// 					type='password'
// 					name='password'
// 					placeholder='password...'
// 					value={password}
// 					onChange={(evt) => setPassword(evt.target.value)}
// 				/>
// 			</form>
// 		</>
// 	);
// }

// export default App;

// ========== Second example ======

// import React from 'react';
// import './App.scss';

// import Counter from './Components/Counter/Counter'

// function App () {

//     const [toggle, setToggle] = React.useState(false)

//     return (
//         <>

//             <button onClick={() => setToggle(!toggle)}>toggle</button>

//             {toggle ? <Counter /> : null}
//         </>
//     )
// }

// export default App;
