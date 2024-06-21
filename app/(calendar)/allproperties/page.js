export default function Allproperties() {
  return (
    <section className="flex flex-col items-center justify-center mt-3 mb-3 p-2">
      <div className="w-[250px] h-[350px] md:w-[550px] p-2">
        <h1>Bowden House</h1>
        <p>Flat 43 Bowden House on the 5th Floor. 9 Palmer Road SW11 4FW</p>
        {/* <b style={{ color: "red", marginBottom: "15px" }}>
          <p>NOTE:</p>
          <p>20 June - No Arrival</p>
        </b> */}
        <iframe
          src="https://calendar.google.com/calendar/embed?src=dv6h28r9avoe0i2246p78sufe9e5jqcr%40import.calendar.google.com&ctz=UTC"
          width="800"
          height="600"
          frameborder="0"
        ></iframe>
      </div>
      {/* <div className="w-[250px] h-[350px] md:w-[550px] p-2">
        <h1>Hunter House</h1>
        <p>Flat 8 Hunter House London WC1N 1BE</p>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=i2qmd3b458ofocnj6gnij81ku2lturqg%40import.calendar.google.com&ctz=UTC"
          width="800"
          height="600"
          frameborder="0"
        ></iframe>
      </div> */}
      <div className="w-[250px] h-[350px] md:w-[550px] pt-4 mt-4">
        <h1 style={{ marginTop: "50px" }}>Prince's Square</h1>
        <p>20 Prince square Flat 3B. W2 4NP</p>
        <b style={{ color: "red", marginBottom: "15px" }}>
          <p>NOTE:</p>
          <p>5 July - no arrival</p>
        </b>{" "}
        <br />
        <iframe
          src="https://calendar.google.com/calendar/embed?src=v76lse4vfu7dm7lcno1hm39hhcnp56kp%40import.calendar.google.com&ctz=UTC"
          width="800"
          height="600"
          frameborder="0"
        ></iframe>
      </div>
      <div className="w-[250px] h-[350px] md:w-[550px] pt-4 mt-4">
        <h1 style={{ marginTop: "50px" }}>Sky Garden</h1>
        <p>Flat 1008, 155 Wandsworth Road, London SW8 2FW</p>
        <b style={{ color: "red", marginBottom: "15px" }}>
          <p>NOTE:</p>
          <p>24 June - no arrival</p>
        </b>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=pfnoec62930muadpkjs5d96hsnfaajbg%40import.calendar.google.com&ctz=UTC"
          width="800"
          height="600"
          frameborder="0"
        ></iframe>
      </div>
      <div className="w-[250px] h-[350px] md:w-[550px] pt-4 mt-4">
        <h1 style={{ marginTop: "50px" }}>Grafton Way</h1>
        <p>Flat 111, Grafton Way 30-40, London WC1E 6DY</p>
        {/* <b style={{ color: "red", marginBottom: "15px" }}>
          <p>NOTE:</p>
          <p>16 June - deep cleaning + setup (TBC)</p>
        </b> */}
        <iframe
          src="https://calendar.google.com/calendar/embed?src=kemg78v2m95n861fq11cntdl3qngu2ks%40import.calendar.google.com&ctz=UTC"
          width="800"
          height="600"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  );
}
