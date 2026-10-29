import { countryDetails, schengenFacts, schengenSteps, schengenRefusalReasons, SCHENGEN_MEMBER_COUNT } from "../data/fileProcessingDetails";
import { schengenDocList } from "../data/fileProcessingCountries";

// Extra sections for Europe / UK / USA / Canada / Australia / NZ pages.
export default function FileProcessingDetails({ country }) {
  const d = countryDetails[country.slug];
  const isSchengen = country.region === "Schengen";
  if (!d && !isSchengen) return null;

  const facts = isSchengen ? schengenFacts : d?.facts || [];
  const steps = isSchengen ? schengenSteps : d?.steps || [];

  return (
    <>
      {d && (
        <>
          <h2>{country.name} at a Glance</h2>
          <div className="landing__table-wrap">
            <table className="landing__table">
              <tbody>
                <tr><th scope="row">Capital</th><td>{d.capital}</td></tr>
                <tr><th scope="row">Currency</th><td>{d.currency}</td></tr>
                <tr><th scope="row">Popular cities</th><td>{d.cities}</td></tr>
                {isSchengen && <tr><th scope="row">Schengen member</th><td>Yes — one visa covers all {SCHENGEN_MEMBER_COUNT} Schengen countries</td></tr>}
              </tbody>
            </table>
          </div>
        </>
      )}

      {facts.length > 0 && (
        <>
          <h2>{isSchengen ? `${country.name} Schengen Visa — Key Rules` : `${country.name} Visa — Key Facts`}</h2>
          <div className="landing__table-wrap">
            <table className="landing__table">
              <tbody>
                {facts.map((f) => (
                  <tr key={f.label}><th scope="row">{f.label}</th><td>{f.value}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {isSchengen && (
        <>
          <h2>Standard Schengen Document Checklist</h2>
          <ul className="req__list">
            {schengenDocList.map((r) => (
              <li key={r}><i className="ri-checkbox-circle-fill"></i> {r}</li>
            ))}
          </ul>
        </>
      )}

      {steps.length > 0 && (
        <>
          <h2>How We Process Your {country.name} Visa File</h2>
          <ol className="landing__steps">
            {steps.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </>
      )}

      {isSchengen && (
        <>
          <h2>Common Reasons for {country.name} Visa Refusal</h2>
          <ul className="req__list req__list--warn">
            {schengenRefusalReasons.map((r) => (
              <li key={r}><i className="ri-error-warning-fill"></i> {r}</li>
            ))}
          </ul>
        </>
      )}

      {d?.tip && (
        <div className="dropbox-notice">
          <div className="dropbox-notice__icon"><i className="ri-lightbulb-flash-fill"></i></div>
          <div className="dropbox-notice__body">
            <h2>Expert Tip for {country.name}</h2>
            <p>{d.tip}</p>
          </div>
        </div>
      )}
    </>
  );
}
