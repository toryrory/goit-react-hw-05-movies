import { StyledLink, Header } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <main>
        <Suspense
          fallback={
            <ColorRing
              wrapperStyle={{
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
