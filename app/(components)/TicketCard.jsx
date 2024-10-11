import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faFileEdit,
  faPen,
  faPencilAlt,
  faX,
} from "@fortawesome/free-solid-svg-icons";

function TicketCard({ ticket }) {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="flex gap-3 ml-auto">
          <Link
            href={`/TicketPage/${ticket._id}`}
            style={{ display: "contents" }}
          >
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="text-red-400 hover:cursor-pointer hover:text-red-200"
            />
          </Link>
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">
            Created at: {formatTimestamp(ticket.createdAt)}
          </p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay state={ticket.status} />
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
