import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import LoginPanel from './LoginPanel';
import AddToCartForm from './AddToCartForm';
import ProductDetail from './ProductDetail';
import ProductsPage from './ProductsPage';
import ProductsBrowser from './ProductsBrowser';
import { loadToken } from './store/authentication';
import { fetchAccessoriesList, setAccessoryList } from './store/accessories';
import {fetchBicyclesList, setBicycleList} from './store/bicycles';
import {fetchClothingList, setClothingList} from './store/clothing';
import LogInOrSignUp from './LogInOrSignUp';
import OrderConfirmation from './OrderConfirmation';
import OrderDetail from './OrderDetail';
import NavBar from './NavBar';
import BicycleProducts from './bicycles/bicycleProducts';
import BicycleDetail from './bicycles/bicycleDetail';
import ClothingProducts from './clothing/clothingProducts';
import ClothingDetail from './clothing/clothingDetail';
import AccessoryProducts from './accessories/accessoryProducts';
import AccessoryDetail from './accessories/accessoryDetail';


const PrivateRoute = ({component: Component, ...rest}) => {
  return (<Route render={(props) => {
    return (
      rest.needLogin === true? <Redirect to='/users/login' />
      : <Component {...props}/>
    );
  }}/>);
}
const App = () => {
  console.log("Inside App.js");
  const token = useSelector(state => state.authentication.token);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const needLogin = !token;

  useEffect(() => {
    setLoaded(true);
    dispatch(loadToken());
    (async () => {
      const responseAccy = await fetchAccessoriesList();
      dispatch(setAccessoryList(responseAccy.accessoriesList));
      const responseBike = await fetchBicyclesList();
      dispatch(setBicycleList(responseBike.bicyclesList));
      const responseClothing = await fetchClothingList();
      dispatch(setClothingList(responseClothing.clothingList));
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if (!loaded ) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route
          path="/users/login"
          render={(props) => (
            <LoginPanel {...props} />
          )}
          />
          <Route
            path="/orderConfirmation"
            render= { (props) => (
              <OrderConfirmation props={props}></OrderConfirmation>)}
          />
          <Route
            path="/users/logInOrSignUp"
            render={ (props) => (
              <LogInOrSignUp {...props} />
              )}
              />
        <Route
          path="/users/signup"
          render={(props) => (
            <SignUp {...props} />
          )}
          />
            <Route
              path="/products"
              render={(props) => (
                <ProductsBrowser {...props}/>
              )}
            />

            <Route
              path="/productsPage"
              render={(props) => (
                <ProductsPage {...props} />
              )}
              />
              <Route
                path="/bicycleProducts"
                exact
                component={BicycleProducts}
                />
                <Route
                  path="/bicycleDetail/:id"
                  component={BicycleDetail}
                />
                <Route
                path="/clothingProducts"
                exact
                component={ClothingProducts}
                />
                <Route
                  path="/clothingDetail/:id"
                  component={ClothingDetail}
                />
                 <Route
                path="/accessoryProducts"
                exact
                component={AccessoryProducts}
                />
                <Route
                  path="/accessoryDetail/:id"
                  component={AccessoryDetail}
                />
              <Route
                  path="/productDetail"
                  render={(props) => (
                    <ProductDetail {...props} />
                  )}
                />
                <PrivateRoute
                    path="/addToCartForm"
                    exact={true}
                    needLogin={needLogin}
                    component={AddToCartForm}
                  />
              <PrivateRoute
                path="/order"
                exact={true}
                needLogin={needLogin}
                component={OrderDetail}
                />
            {/* </ProductInfoContext.Provider> */}
            <Route
            path="/"
            render={(props) => (
              <ProductsBrowser {...props} />
            )}
          ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
