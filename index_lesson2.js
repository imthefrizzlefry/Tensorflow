//shape our data (four rows of 2 columns)
const shape = [4,2];

// feed data into tensor
const data = tf.tensor([4,6,5,9,13,25,1,3], shape);
//print it
data.print();

// set a mutable variable with zeros
const data2 = tf.variable(tf.zeros([8]));
//print it
data2.print();

//change the variables from zero to something...
data2.assign(tf.tensor1d([4,12,5,6,56,3,45,3]));

data2.print();

const data3 = tf.tensor1d([4,6,5,9]);
const data4 = tf.tensor1d([5,4,23,45]);

data3.print();
data4.print();

data3.add(data4).print()
data3.mul(data4).print()

data3.mul(55).print();
