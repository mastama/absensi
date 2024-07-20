import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="flex justify-center mt-4 space-x-1">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    className=
                        {`px-4 py-2 border rounded
                        ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
                        }`
                }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}
