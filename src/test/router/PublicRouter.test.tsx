import { render, screen } from "@testing-library/react"
import PublicRoute from "../../router/PublicRoute"
import { AuthContext } from "../../auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('PublicRouter test suite', () => {
    test('debe de mostrar el children sino esta autenticado', ()=> {
        const contextValue = {
            logged: false,
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1 data-testid="ruta-publica">Esto es ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        const h1RutaPublica = screen.getByTestId('ruta-publica')
        expect(h1RutaPublica).toBeTruthy();
    })

    test('debe de navegar si está autenticado', () => {
        const contextValue = {
            logged: true,
            name: 'mike',
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                            <h1 data-testid="ruta-publica">Esto es ruta publica</h1>
                            </PublicRoute>
                        }></Route>
                        <Route path="/marvel" element={<h1 data-testid='marvel'>Ruta marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByTestId('marvel')).toBeTruthy();

    })
})