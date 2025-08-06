import { motion } from "framer-motion"
import team1 from "../../src/assets/team/team1.jpg"
import team2 from "../../src/assets/team/team2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        animate={{ y: [50, 120, 50] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm rounded-lg shadow-2xl rounded-t-[50px] rounded-br-[50px] border-l-8 border-b-8 border-blue-600"
                    />
                    <motion.img
                        animate={{ x: [100, 170, 100] }}
                        transition={{ duration: 5, delay: 1, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm rounded-lg shadow-2xl rounded-t-[50px] rounded-br-[50px] border-l-8 border-b-8 border-blue-600"
                    />
                </div>
                <div className="flex-1">
                    <motion.h1
                        animate={{ x: 100 }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut", repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#0CFC00', '#004CFC', '#00E3FC'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Jobs</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;