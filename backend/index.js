const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
const cors = require("cors");
const connection = require("./db/dbConnection");
app.use(cors());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const CryptoJS = require("crypto-js");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
/*****************************************/
app.listen(4000, () => {
  console.log("server is running on port: 4000");
});
/**********************Users Auth*********************** */
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  connection.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
/**hash password***/
app.post("/create", (req, res) => {
  const sql = "INSERT INTO users(`name`,`email`,`password`) VALUES (?)";
  bcrypt.hash();
  const values = [req.body.name, req.body.email, req.body.password];
  connection.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.put("/update/:id", (req, res) => {
  const sql = "Update users set `name`= ? ,`email` =? where id =?";
  const values = [req.body.name, req.body.email];
  const id = req.params.id;

  connection.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.delete("/users/:id", (req, res) => {
  const sql = "DELETE FROM users WHERE id =?";
  const values = [req.body.name, req.body.email, req.body.password];
  const id = req.params.id;

  connection.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
/********************************************* */
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";
  connection.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});
app.post("/createproduct", (req, res) => {
  const sql = "INSERT INTO products (`name`,`description`,`stock`) VALUES (?)";
  const values = [req.body.name, req.body.description, req.body.stock];
  connection.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.put("/updateproduct/:id", (req, res) => {
  const sql =
    "Update products set `name`= ? ,`description` =?,`stock`=? where id =?";
  const values = [req.body.name, req.body.description, req.body.stock];
  const id = req.params.id;

  connection.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.delete("/products/:id", (req, res) => {
  const sql = "DELETE FROM products WHERE id =?";
  const values = [req.body.name, req.body.description, req.body.stock];
  const id = req.params.id;

  connection.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
/********************************************* */

app.get("/warehouse", (req, res) => {
  const sql = "SELECT * FROM warehouse";
  connection.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});
app.post("/createwarehouse", (req, res) => {
  const sql = "INSERT INTO warehouse(`name`,`location`) VALUES (?)";
  const values = [req.body.name, req.body.location];
  connection.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.put("/updatewarehouse/:id", (req, res) => {
  const sql = "Update warehouse set `name`= ? ,`location` =? where id =?";
  const values = [req.body.name, req.body.location];
  const id = req.params.id;

  connection.query(sql, [...values, id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.delete("/warehouse/:id", (req, res) => {
  const sql = "DELETE FROM warehouse WHERE id =?";
  const values = [req.body.name, req.body.location];
  const id = req.params.id;

  connection.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
/********************************************* */

app.get("/request", (req, res) => {
  const sql = "SELECT * FROM request";
  connection.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});
app.post("/createrequest", (req, res) => {
  const sql =
    "INSERT INTO request(`name`,`email`,`quantity`,`request`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.quantity,
    req.body.request,
  ];
  connection.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
app.delete("/request/:id", (req, res) => {
  const sql = "DELETE FROM request WHERE id =?";
  const values = [
    req.body.name,
    req.body.email,
    req.body.quantity,
    req.body.request,
    req.body.date,
  ];
  const id = req.params.id;

  connection.query(sql, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
// Delete a request by ID
app.put("/request/:id", (req, res) => {
  const id = parseInt(req.params.id);
  connection.query(
    "UPDATE request SET is_deleted = 1 WHERE id = ?",
    [id],
    (error, results) => {
      if (error) {
        res.sendStatus(500);
      } else if (results.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    }
  );
});
/*********************************************** */
app.get("/contact", (req, res) => {
  const sql = "SELECT * FROM contact";
  connection.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});
app.post("/createcontact", (req, res) => {
  const sql =
    "INSERT INTO contact(`name`,`email`,`number`,`problem`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.number,
    req.body.problem,
  ];
  connection.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

/*********************************************** */
app.get("/proware", (req, res) => {
  const sql =
    "SELECT products.pname,products.stock, warehouse.name FROM products JOIN proware ON proware.w_id =products.id JOIN warehouse ON proware.p_id = warehouse.id";
  connection.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});
/*************************************************/
app.get("/contact", (req, res) => {
  const sql = "SELECT * FROM contact";
  connection.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
/************************************************ */
/**AUTH and AUTHORIZE**/
/*****hash******* */
app.post("/register", (req, res) => {
  const saltRounds = 10; // Number of salt rounds for bcrypt
  const salt = bcrypt.genSaltSync(saltRounds); // Generate a salt value
  const sql = "INSERT INTO users(`name`,`email`,`password`) VALUES (?)";
  const password = req.body.password;
  bcrypt.hash(password.toString(), salt, (err, hash) => {
    if (err) {
      console.log(err);
    }
    const values = [req.body.name, req.body.email, hash];
    connection.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Inserting data error in server" });
      return res.json({ Status: "Success" });
    });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ? AND password = ? ";
  const email = req.body.email;
  const password = req.body.password;
  connection.query(sql, [email, password], (err, data) => {
    if (err) {
      return res.json("error");
    }
    if (data.length > 0) {
      const id = data[0].id;
      const token = jwt.sign({ id }, "jwtSecrtKey", { expiresIn: 300 });
      return res.json({ Login: true, token, data });
    } else {
      return res.json("fail");
    }
  });
});
/**************************************************************** */
// app.post("/login", (req, res) => {
//   const sql = "SELECT * FROM users WHERE email = ?";
//   const email = req.body.email;
//   connection.query(sql, [email], (err, data) => {
//     if (err) {
//       return res.json("error");
//     }
//     if (data.length > 0) {
//       bcrypt.compare(
//         req.body.password.toString(),
//         data[0].password,
//         (err, response) => {
//           if (err) {
//             return res.json("error");
//           }
//           if (response) {
//             const id = data[0].id;
//             const token = jwt.sign({ id }, "jet secretkey", {
//               expiresIn: 3000,
//             });
//             return res.json({ Login: true, token, data });
//           }
//           return res.json({ Login: false });
//         }
//       );
//     } else {
//       return res.json("fail");
//     }
//   });
// });
// app.post("/login", (req, res) => {
//   const sql = "SELECT * FROM users WHERE email = ?";
//   const email = req.body.email;
//   connection.query(sql, [email], (err, data) => {
//     if (err) {
//       return res.json("error");
//     }
//     if (data.length > 0) {
//       bcrypt.compare(
//         req.body.password.toString(),
//         data[0].password,
//         (err, response) => {
//           if (err) {
//             return res.json("error");
//           }
//           if (response) {
//             const id = data[0].id;
//             const token = jwt.sign({ id }, "jwtSecrtKey", { expiresIn: 300 });
//             return res.json({ Login: true, token, data });
//           }
//           return res.json({ Login: false });
//         }
//       );
//     } else {
//       return res.json("fail");
//     }
//   });
// });
function encrypt(data, key) {
  const cipherText = CryptoJS.AES.encrypt(data, key).toString();
  return cipherText;
}
function decrypt(cipherText, key) {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, key);
    if (bytes.sigBytes > 0) {
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    } else {
      throw new Error("Decryption Failed Invalid Key");
    }
  } catch (error) {
    throw new Error("Decryption Failed Invalid Key");
  }
}

app.post("/encrypt", (req, res) => {
  const { data, key } = req.body;
  const encrypted = encrypt(data, key);
  res.json({ encrypted });
});

app.post("/decrypt", (req, res) => {
  const { encryptedData, key } = req.body;
  const decryptedData = decrypt(encryptedData, key);
  res.json({ decryptedData });
});

module.exports = app;
