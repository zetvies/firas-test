export default function StatisticIcon({ className, fill }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8883 2.33325H9.11158C4.86492 2.33325 2.33325 4.86492 2.33325 9.11158V18.8766C2.33325 23.1349 4.86492 25.6666 9.11158 25.6666H18.8766C23.1233 25.6666 25.6549 23.1349 25.6549 18.8883V9.11158C25.6666 4.86492 23.1349 2.33325 18.8883 2.33325ZM20.1366 11.6199L17.4416 15.0966C17.1033 15.5283 16.6249 15.8083 16.0766 15.8666C15.5283 15.9366 14.9916 15.7849 14.5599 15.4466L12.4249 13.7666C12.3433 13.6966 12.2499 13.6966 12.2033 13.7083C12.1566 13.7083 12.0749 13.7316 12.0049 13.8249L9.22825 17.4299C9.05325 17.6516 8.79659 17.7683 8.53992 17.7683C8.35325 17.7683 8.16659 17.7099 8.00325 17.5816C7.61825 17.2899 7.54825 16.7416 7.83992 16.3566L10.6166 12.7516C10.9549 12.3199 11.4333 12.0399 11.9816 11.9699C12.5183 11.8999 13.0666 12.0516 13.4983 12.3899L15.6333 14.0699C15.7149 14.1399 15.7966 14.1399 15.8549 14.1283C15.9016 14.1283 15.9833 14.1049 16.0533 14.0116L18.7483 10.5349C19.0399 10.1499 19.5999 10.0799 19.9733 10.3833C20.3583 10.6983 20.4283 11.2466 20.1366 11.6199Z"
        fill={fill}
      />
    </svg>
  );
}
