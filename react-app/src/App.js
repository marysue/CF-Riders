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
import useFetchProductLists from './store/useFetchProductLists';
import LogInOrSignUp from './LogInOrSignUp';
import OrderConfirmation from './OrderConfirmation';
import OrderDetail from './OrderDetail';


const PrivateRoute = ({component: Component, ...rest}) => {
  return (<Route render={(props) => {
    return (
      rest.needLogin === true? <Redirect to='/users/login' />
      : <Component {...props}/>
    );
  }}/>);
}
const App = () => {


  const token = useSelector(state => state.authentication.token);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();


  useFetchProductLists();
  // const accessoriesList = useSelector(state => state.accessories.accessoriesList);
  // const bicyclesList = useSelector(state => state.bicycles.bicyclesList);
  // const clothingList= useSelector(state => state.clothing.clothingList);

  const needLogin = !token;



  useEffect(() => {
    // console.log("Inside App.js: useEffect");
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

    // console.log("App.js:  Done in useEffect ...");
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if (!loaded ) {
    // console.log("App.js:  not loaded...");
    return null;
  }
  //if (!accessoriesList && !bicyclesList && !clothingList) { return null }
  return (
    <BrowserRouter>
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
