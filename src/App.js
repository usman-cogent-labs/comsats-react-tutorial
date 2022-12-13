import Users from './components/users';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserDetails from './components/userDetails';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Users />} />
				<Route path='/:id' element={<UserDetails />} />
				<Route path='*' element={<Navigate to={'/'} replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
