var h = require('vhtml');

function countTo(n) {
  var a = [];
  for (var i = 0; i < n; i++) {
    a.push(i + 1);
  }
  return a.join(', ');
}

var Layout = props => <body>{props.children}</body>;

var Index = function(props) {
  return (
    <Layout>
      <div>
        <h1>{props.title}</h1>
        <p>Welcome to {props.title}</p>
        <p>
          I can count to 10:
          {countTo(10)}
        </p>
      </div>
    </Layout>
  );
};

module.exports = Index;
