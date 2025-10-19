import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
        const [user, setUser] = useState<UserData>({
            id: 1,
            name: "",
            username: "",
            email: "",
            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",
                geo: { 
                    lat: "",
                    lng: "" 
                    },
                },
            phone: "",
            website: "",
            company: {
                name: "",
                catchPhrase: "",
                bs: "",
                },
            });
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
        };
    
        const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
        };
    
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
            <div className="overflow-y-auto h-96 scroll-smooth">
            <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">ID</label>
            <input
                type="number"
                id="userId"
                name="userId"
                value={user.id}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter id"
            />
            </div>
                <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
                type="string"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
            />
            </div> 
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
                type="string"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
                type="string"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
            />
            </div> 
        
            <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
            <input
                type="string"
                id="city"
                name="city"
                value={user.address.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city"
            />
            </div> 
            <div className="mb-4">
            <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street</label>
            <input
                type="string"
                id="street"
                name="street"
                value={user.address.street}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter street"
            />
            </div> 
            <div className="mb-4">
            <label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite</label>
            <input
                type="string"
                id="suite"
                name="suite"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter suite"
            />
            </div> 
            <div className="mb-4">
            <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zip Code</label>
            <input
                type="string"
                id="zipcode"
                name="zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter zip code"
            />
            </div> 
            <div className="mb-4">
            <label htmlFor="latitude" className="block text-gray-700 font-medium mb-2">Latitude</label>
            <input
                type="string"
                id="latitude"
                name="latitude"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter latitude"
            />
            </div> 
            <div className="mb-4">
            <label htmlFor="longitude" className="block text-gray-700 font-medium mb-2">Longitude</label>
            <input
                type="string"
                id="longitude"
                name="longitude"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter longitude"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
                type="string"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
            <input
                type="string"
                id="website"
                name="website"
                value={user.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter website link"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
            <input
                type="string"
                id="company"
                name="company"
                value={user.company.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="bs" className="block text-gray-700 font-medium mb-2">Company BS</label>
            <input
                type="string"
                id="bs"
                name="bs"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company bs"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="catchphrase" className="block text-gray-700 font-medium mb-2">Catch Phrase</label>
            <input
                type="string"
                id="catchphrase"
                name="catchphrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company catch phrase"
            />
            </div>
            </div>
            <div className="flex justify-between items-center">
            <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
                Cancel
            </button>
            <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Add Post
            </button>
            </div>
        </form>
        </div>
    </div>
    )
}
export default UserModal;