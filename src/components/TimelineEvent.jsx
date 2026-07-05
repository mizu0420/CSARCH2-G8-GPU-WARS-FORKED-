export default function TimelineEvent({ event }) {

    if (!event) {
        return null;
    }

    return (
        <div>

            <h3>{event.year}</h3>

            <h4>{event.title}</h4>

            <p>{event.description}</p>

        </div>
    );

}