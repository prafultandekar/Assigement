import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Element from "./Element";


function Home() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState("");
  const [value, setValue] = useState("");
  const [element, setElement] = useState("");
  const [selectedId, setSelectedId] = useState()
  

  async function get() {
    try {
      let res = await fetch("https://movie-fake-server.herokuapp.com/products");
      let data1 = await res.json();

      var brand = data1.map((el) => {
        return el.brand;
      });
      // console.log(data1)
      // setData(data1)
      setData(brand);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    get();
  }, []);

  const handleClick = (el, idx) => {
    // console.log(el)

    setData2(el);
    setSelectedId(idx)
  };
  // console.log(data1)

  const handleright = () => {
    if (value == "move") {
      setData1([...data1, data2]);
      var p = data.filter((el) => {
        return el != data2;
      });
      setData(p);
      setSelectedId(null)
    } else if (value == "copy") {
      setData1([...data1, data2]);
    } else {
      alert("Please select copy or move");
    }
  };

  const handleleft = () => {
    setData([...data, element]);
    var p = data1.filter((el) => {
      return el != element;
    });
    setData1(p);
  };

  const handleDouble = () => {
    var brand = data.map((el) => {
      return el.brand;
    });
    // console.log(brand)
    if (value == "move") {
      setData1([...data1, ...data]);
      setData([]);
    } else if (value == "copy") {
      setData1([...data1, ...data]);
    } else {
      alert("Please Select Copy or Move");
    }
  };
  //  console.log(data)

  const handledouble1 = () => {
    console.log(data1);
    setData([...data, ...data1]);
    setData1([]);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // console.log(value);

  const handleElement = (item) => {
    setElement(item);
  };
  console.log(element);
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        {/* <Checkbox  sx={{marginTop:"2px"}} />
     <h4 >Copy</h4>
     
     <Checkbox sx={{marginLeft:"2px"}}/>
       <h4> Move</h4> */}
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="copy" control={<Radio />} label="Copy" />
          <FormControlLabel value="move" control={<Radio />} label="Move" />
        </RadioGroup>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            border: "1px solid black",
            marginBottom: "20px",
            maxHeight: "20px",
          }}
        >
          <Box> MASTER</Box>
          <Box sx={{ overflow: "scroll", maxHeight: "290px"  }}>
            {data.map((item, id) => {
              return (
                <Box className={selectedId == id ? "blue" : ""} onClick={() => handleClick(item, id)} key={id}>
                  {item}
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60px",
            marginTop: "120px",
          }}
        >
          <Button
            sx={{
              border: "1px solid black",
              marginBottom: "10px",
              maxHeight: "20px",
            }}
            onClick={handleright}
          >
            {">"}
          </Button>
          <Button
            sx={{
              border: "1px solid black",
              marginBottom: "10px",
              maxHeight: "20px",
            }}
            onClick={handleleft}
          >
            {"<"}
          </Button>
          <Button
            sx={{
              border: "1px solid black",
              marginBottom: "10px",
              maxHeight: "20px",
            }}
            onClick={handleDouble}
          >
            {">>"}
          </Button>
          <Button
            sx={{
              border: "1px solid black",
              marginBottom: "10px",
              maxHeight: "20px",
            }}
            onClick={handledouble1}
          >
            {"<<"}
          </Button>
        </Box>

        <Box  sx={{ width: "140px", marginLeft: "30px", height: "60px" }}>
          <h3>NEW ELEMENT</h3>
          {data1?.map((item,id) => {
            return <Element className={selectedId == id ? "blue" : ""}  item={item} handleElement={handleElement} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
