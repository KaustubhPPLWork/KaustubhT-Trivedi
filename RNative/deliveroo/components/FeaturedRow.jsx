import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import tw from 'twrnc'
import client from '../sanity';

const FeaturedRow = ({ id, title, description }) => {

    const [restaurants, setRestaurants] = useState([])

    // const query = `*[_type == 'featured' && _id == '${id}']{
    //     ...,
    //     restaurants[]->{
    //       dishes[]->{
    //         ...,
    //       }
    //     }
    //   }`


    useEffect(() => {
        client.fetch(`*[_type == 'featured' && _id == $id]{
            ...,
            restaurants[]->{
              ...,
            }
          }[0]`, { id }).then((data) => {
            setRestaurants(data.restaurants)
        })
    }, [id])


    console.log(restaurants);

    return (
        <View style={tw`px-4`}>
            <View style={tw`mt-4 flex-row items-center justify-between`}>
                <Text style={tw`font-bold text-lg`}>{title}</Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>

            <Text style={tw`text-xs text-gray-500`}>{description}</Text>

            <ScrollView
                horizontal
                StickyHeaderComponent
                contentContainerStyle={{ paddingHorizontal: 15 }} // this is the inner scroll view style
                showsHorizontalScrollIndicator={false}
                style={tw`-ml-4`} // this is the overall scroll view style
            >

                {/* Restaurants Cards */}

                {restaurants?.map(restaurant => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
                {/* <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                /> */}
            </ScrollView>

        </View>
    );
};

export default FeaturedRow;