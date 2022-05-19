import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import CardSmall from './CardSmall';

import { useNavigation } from '@react-navigation/native';

///https://github.com/pawellizurej/Event-Manager/blob/engineering-project/src/firebase/firebase.js -> check this for some Firestore CRUD functions

function ExploreSmall(props) {
  const navigation = useNavigation();
  const events = [
    {
      title: 'Bike Ride',
      date: ' Sat, 28 May - 4:00 pm',
      city: 'Porto',
      image: {
        uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
      interest: '76 people are going',
    },

    {
      title: 'Color Content',
      date: ' Thu, 14 July - 3:00 pm',
      city: 'Porto',
      image: {
        uri: 'https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      },
      interest: '16 people are going',
    },
    {
      title: 'Minnight',
      date: ' Thu, 14 July - 3:00 pm',
      city: 'Porto',
      image: {
        uri: 'https://images.unsplash.com/photo-1553128409-9e156fe31360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      },
      interest: '12 people are going',
    },
  ];

  const _renderItem = ({ item, index }) => {
    return (
      <View key={index}>
        <TouchableOpacity onPress={() => navigation.navigate(item.onPress)}>
          {/* in navigation -> navigate to EventScreen or something instead of creating multiple ones -> just pass id of the event (from database) as navigation params and then fetch event data with the useEffect while the screen being on the focus*/}
          <CardSmall
            title={item.title}
            date={item.date}
            city={item.city}
            image={item.image}
            interest={item.interest}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ top: 60, paddingBottom: 140 }}>
      <FlatList data={events} renderItem={_renderItem} />
      {/* It is better to use FlatList insted of the scrollview + map, performance issues */}
      {/* <ScrollView showsVerticalScrollIndicator="false">
        {events.map((event, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => navigation.navigate(event.onPress)}
            >
              <CardSmall
                title={event.title}
                date={event.date}
                city={event.city}
                image={event.image}
                interest={event.interest}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

export default ExploreSmall;
