export default function VNFlagIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 30 20" version="1.1" className="mdl-js">
      <rect width={30} height={20} fill="#da251d" />
      <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0" />
    </svg>
  );
}
