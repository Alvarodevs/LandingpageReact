import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

import "bootstrap";

export function Cards() {
	return (
		<CardGroup className="mb-4">
			<Card className="mr-4 border rounded">
				<Card.Img variant="top" src="http://placehold.it/500x325.jpg" />
				<Card.Body className="p-0">
					<Card.Title className="mx-3 mt-4"> Card title</Card.Title>
					<Card.Text className="mx-3">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<div className="card-footer bg-transparent">
						<Button variant="primary">Find Out More!</Button>
					</div>
				</Card.Body>
			</Card>
			<Card className="mr-4 border rounded">
				<Card.Img variant="top" src="http://placehold.it/500x325.jpg" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<div className="card-footer bg-transparent">
						<Button variant="primary">Find Out More!</Button>
					</div>
				</Card.Body>
			</Card>
			<Card className="mr-4 border rounded">
				<Card.Img variant="top" src="http://placehold.it/500x325.jpg" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<div className="card-footer bg-transparent ">
						<Button variant="primary">Find Out More!</Button>
					</div>
				</Card.Body>
			</Card>
			<Card className="border rounded">
				<Card.Img variant="top" src="http://placehold.it/500x325.jpg" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
					<div className="card-footer bg-transparent">
						<Button variant="primary">Find Out More!</Button>
					</div>
				</Card.Body>
			</Card>
		</CardGroup>
	);
}
