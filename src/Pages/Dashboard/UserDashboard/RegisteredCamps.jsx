import { Link } from "react-router-dom";
import useParticipantData from "../../../Hooks/useParticipantData";



const RegisteredCamps = () => {
  const [participantData] = useParticipantData();
  console.log(participantData);
    return (
        <div className="p-4 lg:p-12 w-full flex justify-center">
            <div className="container p-4 lg:p-10 mx-auto text-blue-400 bg-gray-200 rounded-lg">
                <h2 className="mb-5 text-3xl text-center font-semibold text-green-600 leading-tight  -mt-6">Registered Camps ({participantData.length})</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="bg-green-700">
                            <tr className="text-center font-bold text-slate-300">
                                <th className="p-3 text-left">Participant Name</th>
                                <th className="p-3">Camp Name</th>
                                <th className="p-3">Camp Fees</th>
                                <th className="p-3">Payment Status</th>
                                <th className="p-3">Confirmation Status</th>
                                <th className="p-3 text-right">Cancel</th>
                                <th className="p-3 text-right">Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                participantData.map(camp => <tr key={camp._id} className="border-b border-opacity-20 border-green-700 bg-gray-900">
                                    <td className="p-3 text-left">
                                        <p className="text-purple-500 font-semibold">{camp.UserName}</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>{camp.CampName}</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>$ {camp.CampFees}</p>
                                    </td>

                                    <td className="p-3 text-center">
                                        <Link to ={`/dashboard/payment/${camp._id}`}><button className="px-3 py-1 font-semibold rounded-md border-b border-bg-violet-400 text-gray-400">Pay</button></Link>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>Confirmed</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <p>X</p>
                                    </td>
                                    <td className="p-3 text-center">
                                        <button className="">feecback..</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RegisteredCamps;