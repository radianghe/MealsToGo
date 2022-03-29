import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import styled from "styled-components/native";

const searchViewMargin = StatusBar.currentHeight;

const RestaurantsView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  ${searchViewMargin && `margin-top: ${searchViewMargin + 10}px`};
`;

const SearchView = styled.View`
  flex: 0.1;
  justify-content: center;
`;

const ListView = styled.View`
  flex: 0.9;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const ListItemView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <RestaurantsView>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <ListView>
        <ListItemView>
          <RestaurantInfoCard />
        </ListItemView>
      </ListView>
    </RestaurantsView>
  );
};
