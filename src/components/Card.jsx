
function Card({ name, minVersion, logo }) {

    return (
        <div className="card">
            {logo}
            <h3 className="fs-700 fw-500 text-primary-900">Add to {name}</h3>
            <p>Minimum version: {minVersion}</p>
            <a className="btn btn-primary" href="#">Add & Install Extension</a>
        </div>
    )
}

export default Card