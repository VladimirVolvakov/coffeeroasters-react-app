const headquarters = [
  {
    image: "./assets/about/desktop/illustration-uk.svg",
    imageDesc: "Our headquarter in United Kingdom",
    country: "United Kingdom",
    address: "68 Asfordby Rd",
    city: "Alcaston",
    region: "SY6 1YA",
    phone: "+44 1241 918425",
    phoneForLink: "+441241918425",
  },
  {
    image: "./assets/about/desktop/illustration-canada.svg",
    imageDesc: "Our headquarter in Canada",
    country: "Canada",
    address: "1528 Eglinton Avenue",
    city: "Toronto",
    region: "Ontario M4P 1A6",
    phone: "+1 416 485 2997",
    phoneForLink: "+14164852997",
  },
  {
    image: "./assets/about/desktop/illustration-uk.svg",
    imageDesc: "Our headquarter in Australia",
    country: "Australia",
    address: "36 Swanston Street",
    city: "Kewell",
    region: "Victoria",
    phone: "+61 4 9928 3629",
    phoneForLink: "+61499283629",
  },
];

const SectionContacts = () => {
  return (
    <section className="contacts">
      <h2>Our headquarters</h2>
      <div>
        {headquarters.map((headquarter) => (
          <div key={headquarter.city}>
            <img src={headquarter.image} alt={headquarter.imageDesc} />
            <div>
              <h3>{headquarter.country}</h3>
              <div>
                <address>
                  {headquarter.address}
                  <br />
                  {headquarter.city} <br />
                  {headquarter.region}
                </address>
                <a href={`tel:${headquarter.phoneForLink}`}>{headquarter.phone}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionContacts;
