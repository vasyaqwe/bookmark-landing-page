
function Card({ name, minVersion, logo }) {
    return (
        <div className="card flow" style={{ '--flow-space': '.75rem' }}>
            {logo}
            <h3 className="fs-700 fw-500 text-primary-900 text-center">Add to {name}</h3>
            <p className="text-neutral-400 text-center">Minimum version: {minVersion}</p>
            <a className="btn btn-primary" href="#">Add & Install Extension</a>
        </div>
    )
}

export default Card