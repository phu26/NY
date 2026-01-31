import React from 'react';
import { Truck, RotateCcw, Package, DollarSign } from 'lucide-react';

const ServiceFeatures = () => {
    const features = [
        {
            icon: <Truck className="w-8 h-8 mb-4 hover:scale-110 transition-transform duration-300" />,
            title: "Giao hàng toàn quốc",
            description: "Miễn phí vận chuyển với đơn hàng trên 500k."
        },
        {
            icon: <RotateCcw className="w-8 h-8 mb-4 hover:scale-110 transition-transform duration-300" />,
            title: "Đổi trả 7 ngày",
            description: "Hỗ trợ đổi trả trong vòng 7 ngày nếu có lỗi."
        },
        {
            icon: <Package className="w-8 h-8 mb-4 hover:scale-110 transition-transform duration-300" />,
            title: "Bảo hành 12 tháng",
            description: "Bảo hành chính hãng cho các dòng sản phẩm."
        },
        {
            icon: <DollarSign className="w-8 h-8 mb-4 hover:scale-110 transition-transform duration-300" />,
            title: "Thanh toán linh hoạt",
            description: "Nhiều phương thức thanh toán đa dạng."
        }
    ];

    return (
        <div className="bg-[#f9f5f0] py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-transparent hover:border-[#8B5E3C]/20 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg">
                            <div className="text-[#8B5E3C]">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-serif text-[#4A4A4A] mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceFeatures;
