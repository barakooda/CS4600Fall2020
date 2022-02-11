function Vector_mult(v1,v2)
{
	const vec_length = v1.length;
	result = Array()
	

	for (let i = 0; i < vec_length; i++) {

		result.push(v1[i]*v2[i]);
	}

	return result;

}

function GetRowByIndex (matrix,row_index)
{
	row_vector_size = Math.sqrt(matrix.length);
	row = Array()
	
	for (let i = 0; i < row_vector_size; i++) {

		row.push( matrix[ row_index + row_vector_size * i ] );
	}
	
	return row;

}

function GetColumnByIndex (matrix,col_index)
{
	column_vector_size = Math.sqrt(matrix.length);
	column = Array()
	
	for (let i = 0; i < column_vector_size; i++) {

		column.push( matrix[ col_index * column_vector_size + i ] );
	}
	
	return column;

}


// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The transformation first applies scale, then rotation, and finally translation.
// The given rotation value is in degrees.
function GetTransform( positionX, positionY, rotation, scale )
{
	console.log(positionX,positionY);
	rotation = rotation / 180 * Math.PI;
	return Array( Math.cos(rotation)*scale, Math.sin(rotation), 0, -Math.sin(rotation), Math.cos(rotation)*scale, 0, positionX, positionY, 1 );
}



// Returns a 3x3 transformation matrix as an array of 9 values in column-major order.
// The arguments are transformation matrices in the same format.
// The returned transformation first applies trans1 and then trans2.
function ApplyTransform( trans1, trans2 )
{
	const sum = (accumulator, curr) => accumulator + curr;
	//assume both matrices size is NXN
	final_matrix = new Array(trans1.length);
	
	
	vector_size = Math.sqrt(trans1.length);

	for ( let row_index = 0;row_index < vector_size;row_index++)
	{
		current_row = GetRowByIndex(trans2,row_index);

		for ( let col_index = 0;col_index < vector_size;col_index++)
		{
			current_col = GetColumnByIndex(trans1,col_index);
			vector_result = Vector_mult(current_row,current_col);
			
			index = col_index * vector_size + row_index;
			 
			final_matrix[ index ]= vector_result.reduce(sum) ;
		}

	}

	return final_matrix;
}
