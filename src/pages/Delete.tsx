import { IonCol, IonContent, IonGrid, IonImg, IonItem, IonList, IonPage, IonRow } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50'); // Fetching 10 Pokémon for example /* https://pokeapi.co/api/v2/pokemon/pikachu/ */
        const results = response.data.results;
        const pokemonDataPromises = results.map((result: any) => axios.get(result.url));
        const pokemonDataResponses = await Promise.all(pokemonDataPromises);
        const pokemonData = pokemonDataResponses.map((res: any) => res.data);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonGrid>
            <IonRow>
              {pokemonList.map((pokemon: any) => (
                <IonCol size="6" key={pokemon.id}>
                  <IonItem color="light">
                    <IonImg src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                    <IonGrid>
                      <IonRow>
                        <IonCol size="12">
                          <span>Type: {pokemon.types.map((type: any) => type.type.name).join(', ')}</span>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="12">
                          <span>{pokemon.name}</span>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonItem>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

/* import { IonContent, IonImg, IonItem, IonList, IonPage, IonSearchbar } from '@ionic/react';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Data from "../../public/data.json"

const Home: React.FC = () => {
  const [entryData, setEntryData] = useState();
  const [querryData, setQuerryData] = useState();
  
  useEffect(() => {
    const fetchEntry = async () => {
      const response = await axios.get(`http://localhost:8100/public/data.json?t=1719065237109&import/`);
      setEntryData(response.data[0]);
      console.log("Data >>>", entryData);
      console.log("entry >>>", response.data[0]);
      
    };

    fetchEntry();
  }, []);

  return (
    <IonPage>
      <IonSearchbar value={querryData} />
      <IonContent>
        <IonList>
          {Data.map((entry:any) => (
            <IonItem key={entry.id} routerLink={`/details/${entry.id}`}>
              <span slot="start">{entry.id}.</span>
              <span>{entry.que}</span>
            </IonItem>
          ))}
          
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
 */