<!-- in react props always work from top to bottom -->

<!-- we can not pass any propt to parent -->


<!-- App.jsx → Card.jsx → Details.jsx -->
<!-- // App.jsx
<Card castImg="..." castName="..." realName="..." />

// Card.jsx
const Card = ({ castImg, realName, castName }) => {
  return <Details castName={castName} realName={realName} />;
};

// Details.jsx
const Details = ({ castName, realName }) => {
  return <div>{castName} - {realName}</div>;
}; -->