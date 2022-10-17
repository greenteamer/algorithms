function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then(res => {
      console.log(res)
      return res.json()
    }).then(d => {
      console.log(d)
      setData(d)
    })
  }, [])
  return (
    <ScrollView>
      
            <View>
              {data.map(item => (
                <View style={{flexDirection: "row"}}>
                  <Text>{item.name.official}</Text>
                  {item.flag}
                </View>
              ))}
            
    </ScrollView>  
  );
}