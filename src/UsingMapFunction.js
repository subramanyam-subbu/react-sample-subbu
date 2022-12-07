const carNames = ['Audi', 'Bmw', 'Volvo']

function UsingMapFunction() {

  // const renderListOfCarNames = (names) => {
  //   return names.map(name => <li>{name}</li>)
  // }

  return (
    <div>
      <ul>
        {/* {renderListOfCarNames(carNames)} */}
      
        {
          carNames.map(car => <li>{car}</li>)
        }

      </ul>
    </div>
  );
}

export default UsingMapFunction;