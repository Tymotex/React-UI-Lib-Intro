import { motion } from "framer-motion";
import React from "react";
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardDeck,
    CardSubtitle,
    CardBody,
} from "reactstrap";

const Example = (props) => {
    return (
        <CardDeck>
            <motion.div
                className={"card"}
                animate={{ x: 0, rotate: 0 }}
                initial={{ x: -1000, rotate: 180 }}
                transition={{ duration: "2", type: "spring", bounce: 0.4 }}
            >
                <CardImg
                    top
                    width="100%"
                    src="https://www.freecodecamp.org/news/content/images/2020/09/image-21.png"
                    alt="Card image cap"
                />
                <CardBody>
                    <CardTitle tag="h5">COMP2521</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Data Structures and Algorithms
                    </CardSubtitle>
                    <CardText>
                        The goal of this course is to deepen students'
                        understanding of data structures and algorithms and how
                        these can be employed effectively in the design of
                        software systems.
                    </CardText>
                    <Button>View Course</Button>
                </CardBody>
            </motion.div>

            <motion.div
                className={"card"}
                animate={{ x: 0, rotate: 0 }}
                initial={{ x: -1000, rotate: 180 }}
                transition={{ duration: "2", type: "spring", bounce: 0.4 }}
            >
                <CardImg
                    top
                    width="100%"
                    src="https://www.eweek.com/wp-content/uploads/2020/10/Networking3.jpg"
                    alt="Card image cap"
                />
                <CardBody>
                    <CardTitle tag="h5">COMP3331</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Computer Networks and Applications
                    </CardSubtitle>
                    <CardText>
                        Networking technology overview. Protocol design and
                        validation using the finite state automata in
                        conjunction with time-lines. Overview of the IEEE802
                        network data link protocol standards.
                    </CardText>
                    <Button>View Course</Button>
                </CardBody>
            </motion.div>

            <motion.div
                className={"card"}
                animate={{ x: 0, rotate: 0 }}
                initial={{ x: -1000, rotate: 180 }}
                transition={{ duration: "2", type: "spring", bounce: 0.4 }}
            >
                <CardImg
                    top
                    width="100%"
                    src="https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg"
                    alt="Card image cap"
                />
                <CardBody>
                    <CardTitle tag="h5">COMP1531</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Software Engineering Fundamentals
                    </CardSubtitle>
                    <CardText>
                        This course provides an introduction to software
                        engineering principles: basic software lifecycle
                        concepts, modern development methodologies, conceptual
                        modeling and how these activities relate to programming.
                    </CardText>
                    <Button>View Course</Button>
                </CardBody>
            </motion.div>
        </CardDeck>
    );
};

export default Example;
