import { IonContent, IonList, IonPage, IonSearchbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonRow, IonCol } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TabBar from '../components/TabBar';

const Home: React.FC = () => {
  const [entryData, setEntryData] = useState<any[]>([]);
  const [queryData, setQueryData] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('India');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`http://universities.hipolabs.com/search?country=${selectedCountry}`);
        setEntryData(response.data);
        console.log("Data >>>", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, [selectedCountry]);

  const handleCountryChange = (e: CustomEvent) => {
    setSelectedCountry(e.detail.value);
  };

  const handleSearchChange = (e: CustomEvent) => {
    setQueryData((e.target as HTMLInputElement).value);
  };

  const filteredEntryData = entryData.filter(entry =>
    entry.name.toLowerCase().includes(queryData.toLowerCase())
  );

  const sortedEntryData = entryData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <IonPage>
      <IonContent>
        <IonRow style={{position:"sticky",top:"0",zIndex:"1",background:"#fff"}}>
          <IonCol size="12">
            <IonSelect fill="outline" value={selectedCountry} onIonChange={handleCountryChange} interface="popover" label="Select a Country">
              <IonSelectOption value="Afghanistan">Afghanistan</IonSelectOption>
              <IonSelectOption value="Albania">Albania</IonSelectOption>
              <IonSelectOption value="Algeria">Algeria</IonSelectOption>
              <IonSelectOption value="Antigua and Barbuda">Antigua and Barbuda</IonSelectOption>
              <IonSelectOption value="Armenia">Armenia</IonSelectOption>
              <IonSelectOption value="Austria">Austria</IonSelectOption>
              <IonSelectOption value="Australia">Australia</IonSelectOption>
              <IonSelectOption value="Azerbaijan">Azerbaijan</IonSelectOption>
              <IonSelectOption value="Bahrain">Bahrain</IonSelectOption>
              <IonSelectOption value="Bangladesh">Bangladesh</IonSelectOption>
              <IonSelectOption value="Belarus">Belarus</IonSelectOption>
              <IonSelectOption value="Belgium">Belgium</IonSelectOption>
              <IonSelectOption value="Belize">Belize</IonSelectOption>
              <IonSelectOption value="Bosnia and Herzegovina">Bosnia and Herzegovina</IonSelectOption>
              <IonSelectOption value="Botswana">Botswana</IonSelectOption>
              <IonSelectOption value="Brazil">Brazil</IonSelectOption>
              <IonSelectOption value="Bulgaria">Bulgaria</IonSelectOption>
              <IonSelectOption value="Cambodia">Cambodia</IonSelectOption>
              <IonSelectOption value="Cameroon">Cameroon</IonSelectOption>
              <IonSelectOption value="Canada">Canada</IonSelectOption>
              <IonSelectOption value="China">China</IonSelectOption>
              <IonSelectOption value="Colombia">Colombia</IonSelectOption>
              <IonSelectOption value="Croatia">Croatia</IonSelectOption>
              <IonSelectOption value="Cyprus">Cyprus</IonSelectOption>
              <IonSelectOption value="Czech Republic">Czech Republic</IonSelectOption>
              <IonSelectOption value="Denmark">Denmark</IonSelectOption>
              <IonSelectOption value="Egypt">Egypt</IonSelectOption>
              <IonSelectOption value="Ethiopia">Ethiopia</IonSelectOption>
              <IonSelectOption value="Finland">Finland</IonSelectOption>
              <IonSelectOption value="France">France</IonSelectOption>
              <IonSelectOption value="Gambia">Gambia</IonSelectOption>
              <IonSelectOption value="Georgia">Georgia</IonSelectOption>
              <IonSelectOption value="Germany">Germany</IonSelectOption>
              <IonSelectOption value="Ghana">Ghana</IonSelectOption>
              <IonSelectOption value="Greece">Greece</IonSelectOption>
              <IonSelectOption value="Guatemala">Guatemala</IonSelectOption>
              <IonSelectOption value="Haiti">Haiti</IonSelectOption>
              <IonSelectOption value="Holy See (Vatican City State)">Holy See (Vatican City State)</IonSelectOption>
              <IonSelectOption value="Hong Kong">Hong Kong</IonSelectOption>
              <IonSelectOption value="Hungary">Hungary</IonSelectOption>
              <IonSelectOption value="India">India</IonSelectOption>
              <IonSelectOption value="Indonesia">Indonesia</IonSelectOption>
              <IonSelectOption value="Iran">Iran</IonSelectOption>
              <IonSelectOption value="Iraq">Iraq</IonSelectOption>
              <IonSelectOption value="Ireland">Ireland</IonSelectOption>
              <IonSelectOption value="Israel">Israel</IonSelectOption>
              <IonSelectOption value="Italy">Italy</IonSelectOption>
              <IonSelectOption value="Japan">Japan</IonSelectOption>
              <IonSelectOption value="Jordan">Jordan</IonSelectOption>
              <IonSelectOption value="Kazakhstan">Kazakhstan</IonSelectOption>
              <IonSelectOption value="Kenya">Kenya</IonSelectOption>
              <IonSelectOption value="Korea, Republic of">Korea, Republic of</IonSelectOption>
              <IonSelectOption value="Kosovo">Kosovo</IonSelectOption>
              <IonSelectOption value="Kuwait">Kuwait</IonSelectOption>
              <IonSelectOption value="Kyrgyzstan">Kyrgyzstan</IonSelectOption>
              <IonSelectOption value="Latvia">Latvia</IonSelectOption>
              <IonSelectOption value="Lebanon">Lebanon</IonSelectOption>
              <IonSelectOption value="Libya">Libya</IonSelectOption>
              <IonSelectOption value="Malaysia">Malaysia</IonSelectOption>
              <IonSelectOption value="Mexico">Mexico</IonSelectOption>
              <IonSelectOption value="Moldova, Republic of">Moldova, Republic of</IonSelectOption>
              <IonSelectOption value="Morocco">Morocco</IonSelectOption>
              <IonSelectOption value="Nepal">Nepal</IonSelectOption>
              <IonSelectOption value="Netherlands">Netherlands</IonSelectOption>
              <IonSelectOption value="New Zealand">New Zealand</IonSelectOption>
              <IonSelectOption value="Nigeria">Nigeria</IonSelectOption>
              <IonSelectOption value="Norway">Norway</IonSelectOption>
              <IonSelectOption value="Oman">Oman</IonSelectOption>
              <IonSelectOption value="Pakistan">Pakistan</IonSelectOption>
              <IonSelectOption value="Palestine, State of">Palestine, State of</IonSelectOption>
              <IonSelectOption value="Papua New Guinea">Papua New Guinea</IonSelectOption>
              <IonSelectOption value="Philippines">Philippines</IonSelectOption>
              <IonSelectOption value="Poland">Poland</IonSelectOption>
              <IonSelectOption value="Portugal">Portugal</IonSelectOption>
              <IonSelectOption value="Puerto Rico">Puerto Rico</IonSelectOption>
              <IonSelectOption value="Romalia">Romalia</IonSelectOption>
              <IonSelectOption value="Romania">Romania</IonSelectOption>
              <IonSelectOption value="Russian Federation">Russian Federation</IonSelectOption>
              <IonSelectOption value="Rwanda">Rwanda</IonSelectOption>
              <IonSelectOption value="Saudi Arabia">Saudi Arabia</IonSelectOption>
              <IonSelectOption value="Slovakia">Slovakia</IonSelectOption>
              <IonSelectOption value="Singapore">Singapore</IonSelectOption>
              <IonSelectOption value="Somalia">Somalia</IonSelectOption>
              <IonSelectOption value="South Africa">South Africa</IonSelectOption>
              <IonSelectOption value="Spain">Spain</IonSelectOption>
              <IonSelectOption value="Suriname">Suriname</IonSelectOption>
              <IonSelectOption value="Sri Lanka">Sri Lanka</IonSelectOption>
              <IonSelectOption value="Sudan">Sudan</IonSelectOption>
              <IonSelectOption value="Sweden">Sweden</IonSelectOption>
              <IonSelectOption value="Switzerland">Switzerland</IonSelectOption>
              <IonSelectOption value="Syrian Arab Republic">Syrian Arab Republic</IonSelectOption>
              <IonSelectOption value="Taiwan, Province of China">Taiwan, Province of China</IonSelectOption>
              <IonSelectOption value="Tanzania, United Republic of">Tanzania, United Republic of</IonSelectOption>
              <IonSelectOption value="Thailand">Thailand</IonSelectOption>
              <IonSelectOption value="Turkey">Turkey</IonSelectOption>
              <IonSelectOption value="Uganda">Uganda</IonSelectOption>
              <IonSelectOption value="Ukraine">Ukraine</IonSelectOption>
              <IonSelectOption value="united Arab Emirates">united Arab Emirates</IonSelectOption>
              <IonSelectOption value="United Kingdom">United Kingdom</IonSelectOption>
              <IonSelectOption value="United States">United States</IonSelectOption>
              <IonSelectOption value="Yemen">Yemen</IonSelectOption>
              <IonSelectOption value="Viet Nam">Viet Nam</IonSelectOption>
              <IonSelectOption value="Zambia">Zambia</IonSelectOption>
              <IonSelectOption value="Zimbabwe">Zimbabwe</IonSelectOption>
            </IonSelect>   
          </IonCol>
          <IonCol size="12">
            <IonInput value={queryData} onIonChange={handleSearchChange} fill="outline" placeholder="Search University" />
          </IonCol>
        </IonRow>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <IonList>
            {filteredEntryData.map((entry, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h1>
                    <a style={{textDecoration:"none"}} href={entry.web_pages[0]} target="_blank" rel="noopener noreferrer">{entry.name}</a>
                  </h1>
                  {/* <IonLabel>Website: <a href={entry.web_pages[0]} target="_blank" rel="noopener noreferrer">{entry.web_pages[0]}</a> </IonLabel> */}
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
      <TabBar />
    </IonPage>
  );
};

export default Home;
